package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Comment
import com.fastcampus.fcboard.domain.Post

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : CommentDto
 * author      : minuk
 * date        : 2/17/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/17/24   minuk       최초 생성
 *
 * </pre>
 */
data class CommentDto(
    val content: String,
    val userBy: String
) {
    fun toEntity(post: Post): Comment {
        return Comment(
            content = content,
            createdBy = userBy,
            post = post,
        )
    }
}
