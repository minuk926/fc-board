package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.dto.*
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
 * date        : 2024-02-22
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-22    limju       최초 생성
 *
</pre> *
 */
@RestController
class PostController(
    private val postService: PostService
) {
    /**
     * 게시글 생성
     * @param postRequestDto 게시글 생성 요청 정보
     * @return 생성한 게시글 정보
     */
    @PostMapping("/posts")
    @ResponseBody
    fun createPost(
        @RequestBody postRequestDto: PostRequestDto
    ): PostResponseDto {
        return postService.createPost(postRequestDto).toPostResponseDto()
    }

    /**
     * 게시글 변경
     * @param id 게시글 ID
     * @param postRequestDto 게시글 변경 요청 정보
     * @return 변경한 게시글 정보
     */
    @PutMapping("/posts/{id}")
    fun updatePost(
        @PathVariable id: Long,
        @RequestBody postRequestDto: PostRequestDto
    ): PostResponseDto {
        return postService.updatePost(id, postRequestDto)
    }

    /**
     * 게시글 삭제
     * @param id 게시글 ID
     * @param deletedBy 삭제자
     * @return 삭제한 Post ID
     */
    @DeleteMapping("/posts/{id}")
    fun deletePost(
        @PathVariable id: Long,
        @RequestParam deletedBy: String
    ): Long {
        return postService.deletePost(id, deletedBy)
    }

    /**
     * 게시글 조회
     * @param id 게시글 ID
     * @return 게시글 정보
     */
    @GetMapping("/posts/{id}")
    fun getPost(
        @PathVariable id: Long
    ): PostResponseDto {
        return postService.getPost(id)
    }

    /**
     * 게시글 목록 조회
     * @param pageable 페이징 정보
     * @param postSearchDto 게시글 검색 정보
     * @return 게시글 목록
     */
    @GetMapping("/posts")
    fun getPosts(
        pageable: Pageable,
        postSearchDto: PostSearchDto
    ): Page<PostResponseListDto> {
        return postService.getPosts(pageable, postSearchDto)
    }
}
