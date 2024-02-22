package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Comment

data class CommentResponseDto(
    val id: Long,
    val content: String,
    val createdBy: String,
    val createdAt: String
)

/**
 * Comment Entity to CommentResponseDto
 *
 * @return CommentResponseDto
 */
fun Comment.toCommentResponseDto(): CommentResponseDto =
    CommentResponseDto(
        id = id,
        content = content,
        createdBy = createdBy,
        createdAt = createdAt.toString(),
    )
