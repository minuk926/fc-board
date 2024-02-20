package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.PostDto
import com.fastcampus.fcboard.dto.PostSearchDto
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.exception.PostNotUpdatedException
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
 * date        : 2024-02-16
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-16    limju       최초 생성
 *
 * </pre>
 */
@Service
@Transactional(readOnly = true)
class PostService(
    private val postRepository: PostRepository
) {
    /**
     * 게시글 생성
     * @param postDto 게시글 정보
     * @return 생성된 게시글 id
     */
    @Transactional
    fun createPost(postDto: PostDto): Long = postRepository.save(postDto.toEntity()).id

    /**
     * 게시글 변경
     * @param id 게시글 id
     * @param postDto 수정할 게시글 정보
     */
    @Transactional
    fun updatePost(
        id: Long,
        postDto: PostDto
    ): Long {
        val post = postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()

        if (post.createdBy != postDto.userBy) throw PostNotUpdatedException()
        post.update(postDto)

        return postRepository.save(post).id
    }

    /**
     * 게시글 조회
     * @param id 게시글 id
     * @return 게시글 정보
     */
    fun getPost(id: Long) = postRepository.findByIdOrNull(id)?.toPostInfoDto() ?: throw PostNotFoundException()

    /**
     * 게시글 목록 조회
     * @param pageable 페이징 정보
     * @param postSearchDto 검색 조건
     */
    fun getPosts(
        pageable: Pageable,
        postSearchDto: PostSearchDto
    ): Page<Post> {
        return postRepository.findPagePosts(pageable, postSearchDto)
    }

    /**
     * 게시글 삭제
     * @param id 게시글 id
     * @param userBy 삭제 요청한 사용자
     */
    @Transactional
    fun deletePost(
        id: Long,
        userBy: String
    ): Long {
        val post = postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()

        if (post.createdBy != userBy) throw PostNotUpdatedException()
        postRepository.delete(post)

        return id
    }
}
