package com.fastcampus.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.redis.connection.RedisStandaloneConfiguration
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.data.redis.serializer.StringRedisSerializer

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.config
 * fileName    : RedisConfig
 * author      : limju
 * date        : 2024-02-27
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-27    limju       최초 생성
 *
 * </pre>
 */
@Configuration
class RedisConfig {
    @Value("\${spring.cache.redis.host}")
    lateinit var redisHost: String

    @Value("\${spring.cache.redis.password:password}")
    lateinit var password: String

    @Value("\${spring.cache.redis.port}")
    lateinit var redisPort: String

    /**
     * RedisConnectionFactory Bean 등록
     *
     * testContainer 사용시 반드시 password를 설정이 필요하여 추가
     * RedisTestContainers.java 참조
     *
     * @return LettuceConnectionFactory
     */
    @Bean
    fun redisConnectionFactory(): LettuceConnectionFactory {
        RedisStandaloneConfiguration().run {
            hostName = redisHost
            port = redisPort.toInt()
            password = password
            return LettuceConnectionFactory(this)
        }
    }

    @Bean
    fun redisTemplate(): RedisTemplate<String, Any> {
        val redisTemplate = RedisTemplate<String, Any>()
        redisTemplate.connectionFactory = redisConnectionFactory()
        redisTemplate.keySerializer = StringRedisSerializer()
        redisTemplate.valueSerializer = StringRedisSerializer()
        return redisTemplate
    }
}
