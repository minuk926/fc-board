package com.fastcampus.fcboard.dto

data class PostUpdateRequest(
    val title: String,
    val content: String,
    val updatedBy: String
)

fun PostUpdateRequest.toDto() =
    PostUpdatedRequestDto(
        title = title,
        content = content,
        updatedBy = updatedBy,
    )
