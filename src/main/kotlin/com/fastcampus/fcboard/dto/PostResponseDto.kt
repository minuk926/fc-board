package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Post

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostResponseDto
 * author      : limju
 * date        : 2024-02-21
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-21    limju       최초 생성
 *
 * </pre>
 */
data class PostResponseDto(
    val id: Long,
    val title: String,
    val content: String? = null,
    val comments: List<CommentResponseDto> = emptyList(),
    val createdBy: String,
    val createdAt: String
)

/**
 * Post Entity to PostResponseDto
 *
 * @return PostResponseDto
 */
fun Post.toPostResponseDto() =
    PostResponseDto(
        id = id,
        title = title,
        content = content,
        comments = comments.map { it.toCommentResponseDto() },
        createdBy = createdBy,
        createdAt = createdAt.toString(),
    )
