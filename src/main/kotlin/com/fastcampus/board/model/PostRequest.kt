package com.fastcampus.board.model

data class PostRequest(
    val page: Int? = 1,
    val size: Int? = 0,
    val title: String,
    val content: String,
    val createdBy: String,
)
