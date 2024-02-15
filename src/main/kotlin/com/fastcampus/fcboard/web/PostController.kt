package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.PostDtlDto
import com.fastcampus.fcboard.dto.PostDto
import com.fastcampus.fcboard.dto.PostSchDto
import com.fastcampus.fcboard.service.PostService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.web
 * fileName    : PostController
 * author      : limju
 * date        : 2024-02-15
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-15    limju       최초 생성
 *
 * </pre>
 */
@RestController
class PostController(
    private val postService: PostService
) {

    @PostMapping("/posts")
    fun createPost(@RequestBody postDto: PostDto): Long = postService.createPost(postDto)

    @PutMapping("/posts/{id}")
    fun updatePost(@PathVariable id: Long, @RequestBody postCreateDto: PostDto): Long =
        postService.updatePost(id, postCreateDto)

    @GetMapping("/posts/{id}")
    fun findPost(@PathVariable id: Long): PostDtlDto =
        postService.findPost(id)

    @GetMapping("/posts")
    fun findPosts(pageable: Pageable, postSchDto: PostSchDto): Page<Post> =
        postService.findPosts(pageable, postSchDto)
}
