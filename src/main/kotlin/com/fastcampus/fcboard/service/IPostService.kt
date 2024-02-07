package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Board
import com.fastcampus.fcboard.model.PostResponse

interface IPostService {
    fun findAll(): List<PostResponse>

    fun findById(id: Long): Board
}
