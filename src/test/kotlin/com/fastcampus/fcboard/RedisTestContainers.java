package com.fastcampus.fcboard;

import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ActiveProfiles;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.utility.DockerImageName;

@Configuration
@ActiveProfiles("test")
public class RedisTestContainers {
	private static final String REDIS_DOCKER_IMAGE = "redis:5.0.3-alpine";

    static {
		Integer redisPort = 6379;
		GenericContainer<?> REDIS_CONTAINER =
            new GenericContainer<>(DockerImageName.parse(REDIS_DOCKER_IMAGE))
                .withExposedPorts(redisPort)
                // 컨테이너 재사용
                .withReuse(true);

        REDIS_CONTAINER.start();    // (2)

        // RedisContainer 와 연결하기 위해 host, port를 매핑
        System.setProperty("spring.cache.redis.host", REDIS_CONTAINER.getHost());
        System.setProperty("spring.cache.redis.port", REDIS_CONTAINER.getMappedPort(redisPort).toString());
    }
}
