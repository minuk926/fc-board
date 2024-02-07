package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Board
import com.fastcampus.fcboard.model.PostResponse
import com.fastcampus.fcboard.repository.PostRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException

@Service
class PostService(
    val postRepository: PostRepository,
) : IPostService {
    override fun findAll(): List<PostResponse> = postRepository.findAll().map { it -> PostResponse.of(it) }.toList()

    override fun findById(id: Long): Board =
        postRepository.findByIdOrNull(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
}
