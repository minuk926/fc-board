package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.service.LikeService
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.web
 * fileName    : Likecontroller
 * author      : limju
 * date        : 2024-02-27
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-27    limju       최초 생성
 *
 * </pre>
 */
@RestController
class LikeController(
    private val likeService: LikeService
) {

    @PostMapping("/posts/{postId}/likes")
    fun createLike(@PathVariable postId: Long, createdBy: String): Long {
        return likeService.createLike(postId, createdBy)
    }

    @PostMapping("/posts/{postId}/likes2")
    fun createLike2(@PathVariable postId: Long, createdBy: String) {
        likeService.createEventLike(postId, createdBy)
    }
}
