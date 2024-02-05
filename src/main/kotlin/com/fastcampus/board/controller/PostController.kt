package com.fastcampus.board.controller

import com.fastcampus.board.service.IPostService
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.bind.annotation.RestController

@RestController
class PostController(
    val postService: IPostService,
) {
    @Transactional(readOnly = true)
    fun getAll() =
        postService.findAll()
}
