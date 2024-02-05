package com.fastcampus.board.service

import com.fastcampus.board.model.PostResponse
import com.fastcampus.domain.Board

interface IPostService {
    fun findAll(): List<PostResponse>

    fun findById(id: Long): Board
}
