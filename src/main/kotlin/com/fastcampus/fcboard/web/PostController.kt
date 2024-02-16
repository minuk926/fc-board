package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.PostDto
import com.fastcampus.fcboard.dto.PostInfoDto
import com.fastcampus.fcboard.dto.PostSearchDto
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
 * date        : 2024-02-16
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-16    limju       최초 생성
 *
 * </pre>
 */
@RestController
class PostController(
    private val postService: PostService
) {
    @PostMapping("/posts")
    fun createPost(@RequestBody postDto: PostDto) =
        postService.createPost(postDto)

    @PutMapping("/posts/{id}")
    fun updatePost(@PathVariable id: Long, @RequestBody postDto: PostDto): Long =
        postService.updatePost(id, postDto)

    @GetMapping("/posts/{id}")
    fun getPost(@PathVariable id: Long): PostInfoDto = postService.getPost(id)

    @GetMapping("/posts")
    fun getPosts(pageable: Pageable, postSearchDto: PostSearchDto): Page<Post> =
        postService.getPosts(pageable, postSearchDto)

    @DeleteMapping("/posts/{id}")
    fun deletePost(@PathVariable id: Long, @RequestParam userBy: String): Long =
        postService.deletePost(id, userBy)

}
