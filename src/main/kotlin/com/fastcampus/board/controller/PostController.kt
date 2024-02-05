package com.fastcampus.board.controller

import com.fastcampus.board.service.IPostService
import org.springframework.http.ResponseEntity
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.bind.annotation.RestController

@RestController
class PostController(
    val postService: IPostService,
) {
    @Transactional(readOnly = true)
    fun getAll() = ResponseEntity.ok(postService.findAll())

    @Transactional(readOnly = true)
    fun get(id: Long) = ResponseEntity.ok(postService.findById(id))
}
