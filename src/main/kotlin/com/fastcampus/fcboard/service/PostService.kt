package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.dto.PostCreateRequestDto
import com.fastcampus.fcboard.dto.PostUpdatedRequestDto
import com.fastcampus.fcboard.dto.toEntity
import com.fastcampus.fcboard.exception.PostNotDeleteException
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.PostRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional(readOnly = true)
class PostService(
    val postRepository: PostRepository,
) {
    // fun findAll(): List<PostResponse> = postRepository.findAll().map { it -> PostResponse.of(it) }.toList()

    // fun findById(id: Long): PostDetailResponse =
    // postRepository.findByIdOrNull(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)

    @Transactional
    fun createPost(postCreateRequestDto: PostCreateRequestDto): Long {
        return postRepository.save(postCreateRequestDto.toEntity()).id
    }

    @Transactional
    fun updatePost(
        id: Long,
        postUpdateRequestDto: PostUpdatedRequestDto,
    ): Long {
        val post =
            postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()
        post.update(postUpdateRequestDto)
        return postRepository.save(post).id
    }

    @Transactional
    fun deletePost(
        id: Long,
        deletedBy: String,
    ): Long {
        val post =
            postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()
        if (post.createdBy != deletedBy) throw PostNotDeleteException()
        postRepository.delete(post)
        return id
    }
}
