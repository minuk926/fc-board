package com.fastcampus.fcboard.dto

data class PostSearchDto(
    val title: String? = null,
    val content: String? = null,
    val createdBy: String? = null,
    val tag: String? = null
)
