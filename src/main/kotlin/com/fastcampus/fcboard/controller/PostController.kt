@file:Suppress("ktlint:standard:no-wildcard-imports")

package com.fastcampus.fcboard.controller

import com.fastcampus.fcboard.dto.*
import com.fastcampus.fcboard.service.PostService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime

@RestController
class PostController(
    private val postService: PostService
) {
    @PostMapping("/posts")
    fun postCreate(
        @RequestBody postCreateRequest: PostCreateRequest
    ): Long {
        return postService.createPost(postCreateRequest.toDto())
    }

    @PutMapping("/posts/{id}")
    fun putPost(
        @PathVariable id: Long,
        @RequestBody postUpdateRequest: PostUpdateRequest
    ): Long {
        return postService.updatePost(id, postUpdateRequest.toDto())
    }

    @DeleteMapping("/posts/{id}")
    fun deletePost(
        @PathVariable id: Long,
        @RequestParam deletedBy: String
    ): Long {
        return postService.deletePost(id, deletedBy)
    }

    @GetMapping("/posts/{id}")
    fun getPost(
        @PathVariable id: String
    ): PostDetailResponse {
        return PostDetailResponse(1L, "title", "content", "user", LocalDateTime.now().toString())
    }

    @GetMapping("/posts")
    fun getPosts(
        pageable: Pageable,
        postGetRequst: PostSearchRequst
    ): Page<PostSumaryResponse> {
        return Page.empty()
    }
}
