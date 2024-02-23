package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Comment
import com.fastcampus.fcboard.domain.Post

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : CommentRequestDto
 * author      : limju
 * date        : 2024-02-23
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-23    limju       최초 생성
 *
 * </pre>
 */
data class CommentRequestDto(
    val content: String,
    val userBy: String
) {
    fun toEntity(post: Post) =
        Comment(
            content = content,
            post = post,
            createdBy = userBy,
        )
}
