package com.fastcampus.fcboard.model

import java.time.LocalDateTime

data class PostListResponse(
    val id: Long,
    val title: String,
    val content: String,
    val createdBy: String,
    val createdAt: LocalDateTime,
)
