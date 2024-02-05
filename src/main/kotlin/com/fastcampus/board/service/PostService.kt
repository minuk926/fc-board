package com.fastcampus.board.service

import com.fastcampus.board.model.PostResponse
import com.fastcampus.board.repository.PostRepository
import org.springframework.stereotype.Service

@Service
class PostService(
    val postRepository: PostRepository,
) : IPostService {
    override fun findAll(): List<PostResponse> =
        postRepository.findAll().map { it -> PostResponse.of(it) }.toList()

//    override fun findById(id: Long): PostResponse? =
//        postRepository.findByIdOrNull(id).let { it -> PostResponse.of(it) }

}
