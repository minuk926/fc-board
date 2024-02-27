package com.fastcampus.util

import org.springframework.data.redis.core.RedisTemplate
import org.springframework.stereotype.Service

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.config
 * fileName    : RedisUtil
 * author      : limju
 * date        : 2024-02-27
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-27    limju       최초 생성
 *
 * </pre>
 */

@Service
class RedisUtil(
    private val redisTemplate: RedisTemplate<String, Any>
) {
    fun setData(key: String, value: Any) {
        redisTemplate.opsForValue().set(key, value.toString())
    }

    fun getData(key: String): Any? {
        return redisTemplate.opsForValue().get(key)
    }

    fun increment(key: String) {
        redisTemplate.opsForValue().increment(key)
    }

    fun getCount(key: String): Long? {
        return redisTemplate.opsForValue().get(key)?.toString()?.toLong()
    }

    fun getLikeCountKey(postId: Long): String {
        return "like:$postId"
    }
}
