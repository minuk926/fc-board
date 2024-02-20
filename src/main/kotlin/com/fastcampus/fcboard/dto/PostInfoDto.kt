package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Post

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostInfoDto
 * author      : limju
 * date        : 2024-02-16
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-16    limju       최초 생성
 *
 * </pre>
 */
data class PostInfoDto(
    val id: Long,
    val title: String,
    val content: String,
    val createdBy: String,
    val createdAt: String,
    val updatedBy: String?,
    val updatedAt: String?,
    val comments: List<CommentDto> = emptyList()
)

fun Post.toPostInfoDto(): PostInfoDto =
    PostInfoDto(
        id = id,
        title = title,
        content = content,
        createdBy = createdBy,
        createdAt = createdAt.toString(),
        updatedBy = updatedBy,
        updatedAt = updatedAt.toString(),
        comments = comments.map { it.toCommentDto() },
    )
