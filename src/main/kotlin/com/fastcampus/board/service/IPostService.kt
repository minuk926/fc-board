package com.fastcampus.board.service

import com.fastcampus.board.model.PostResponse

interface IPostService {
    fun findAll(): List<PostResponse>

    //fun findById(id: Long): PostResponse?
}
