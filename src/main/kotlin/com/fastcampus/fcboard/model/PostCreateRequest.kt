package com.fastcampus.fcboard.model

data class PostCreateRequest(
    val id: Long?, // = null,
    val title: String,
    val content: String,
    val createdBy: String
)
