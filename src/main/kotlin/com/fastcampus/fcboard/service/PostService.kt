package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.*
import com.fastcampus.fcboard.exception.PostNotDeletableException
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.PostRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.service
 * fileName    : PostService
 * author      : limju
 * date        : 2024-02-22
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-22    limju       최초 생성
 *
 * </pre>
 */
@Transactional(readOnly = true)
@Service
class PostService(
    private val postRepository: PostRepository,
    private val likeService: LikeService
) {
    /**
     * 게시글 생성
     * @param postRequestDto 게시글 생성 요청 정보
     * @return 생성한 게시글 정보
     */
    @Transactional
    fun createPost(postRequestDto: PostRequestDto): Post {
        return postRepository.save(postRequestDto.toEntity())
    }

    /**
     * 게시글 변경
     * @param id 게시글 ID
     * @param postRequestDto 게시글 변경 요청 정보
     * @return 변경한 게시글 정보
     */
    @Transactional
    fun updatePost(
        id: Long,
        postRequestDto: PostRequestDto
    ): PostResponseDto {
        val post = findPost(id)
        post.update(postRequestDto)
        return postRepository.save(post).toPostResponseDto(likeService.countLike(id))
    }

    /**
     * 게시글 삭제
     * @param id 게시글 ID
     * @param deletedBy 삭제자
     * @return 삭제한 Post ID
     */
    @Transactional
    fun deletePost(
        id: Long,
        deletedBy: String
    ): Long {
        val post = findPost(id)
        if (post.createdBy != deletedBy) {
            throw PostNotDeletableException()
        }
        postRepository.delete(post)
        return id
    }

    /**
     * 게시글 조회
     * @param id 게시글 ID
     * @return 게시글 정보
     */
    fun getPost(id: Long): PostResponseDto {
        val post = findPost(id)
        return post.toPostResponseDto(likeService.countLike(id))
    }

    /**
     * 게시글 목록 조회
     * @param pageable 페이징 정보
     * @param postSearchDto 게시글 검색 정보
     * @return 게시글 목록
     */
    fun getPosts(
        pageable: Pageable,
        postSearchDto: PostSearchDto
    ): Page<PostResponseListDto> =
        postRepository.findByPage(pageable, postSearchDto).map { it.toPostResponseListDto(likeService::countLike) }

    private fun findPost(id: Long): Post = postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()
}
