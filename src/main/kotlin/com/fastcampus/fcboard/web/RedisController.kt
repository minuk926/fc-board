package com.fastcampus.fcboard.web

import com.fastcampus.util.RedisUtil
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.web
 * fileName    : RedisController
 * author      : limju
 * date        : 2024-02-28
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-28    limju       최초 생성
 *
 * </pre>
 */
@RestController
class RedisController(
    private val redisUtil: RedisUtil
) {
    @GetMapping("/redis")
    fun getRedisCount(): Long {
        redisUtil.increment("count")
        return redisUtil.getCount("count") ?: 0L
    }
}
