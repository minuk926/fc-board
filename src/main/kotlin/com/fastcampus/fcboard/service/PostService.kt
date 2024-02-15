package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.PostDtlDto
import com.fastcampus.fcboard.dto.PostDto
import com.fastcampus.fcboard.dto.PostSchDto
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.PostRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional(readOnly = true)
class PostService(
    private val postRepository: PostRepository
) {
    @Transactional
    fun createPost(postDto: PostDto): Long =
        postRepository.save(postDto.toPostEntity()).id

    @Transactional
    fun updatePost(id: Long, postDto: PostDto): Long {
        val post = postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()
        post.update(postDto)
        return postRepository.save(post).id
    }

    fun findPost(id: Long): PostDtlDto {
        return postRepository.findByIdOrNull(id)?.toDetailDto() ?: throw PostNotFoundException()
    }

    fun findPosts(pageable: Pageable, postSchDto: PostSchDto): Page<Post> {
        return postRepository.findPageBy(pageable, postSchDto)
    }
}
