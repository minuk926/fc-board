@file:Suppress("ktlint:standard:no-wildcard-imports")

package com.fastcampus.fcboard.controller

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.*
import com.fastcampus.fcboard.service.PostService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*

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
        @PathVariable id: Long
    ): PostDetailResponse {
        return postService.getPost(id)
    }

    @GetMapping("/posts")
    fun getPosts(
        pageable: Pageable,
        postSearchRequst: PostSearchRequst
    ): Page<Post> {
        return postService.findPageBy(pageable, postSearchRequst.toDto()).toResponse()
    }
}
