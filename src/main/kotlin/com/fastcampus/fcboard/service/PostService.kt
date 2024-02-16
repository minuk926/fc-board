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
    @Transactional
    fun createPost(postDto: PostDto): Long =
        postRepository.save(postDto.toEntity()).id

    @Transactional
    fun updatePost(id: Long, postDto: PostDto): Long {
        val post = postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()
        if (post.createdBy != postDto.userBy) throw PostNotUpdatedException()
        post.update(postDto)
        return postRepository.save(post).id
    }

    fun getPost(id: Long) = postRepository.findByIdOrNull(id)?.toPostInfoDto() ?: throw PostNotFoundException()

    fun getPosts(pageable: Pageable, postSearchDto: PostSearchDto): Page<Post> =
        postRepository.findPagePosts(pageable, postSearchDto)

    @Transactional
    fun deletePost(id: Long, userBy: String): Long {
        val post = postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()
        if (post.createdBy != userBy) throw PostNotUpdatedException()
        postRepository.delete(post)
        return id
    }
}
