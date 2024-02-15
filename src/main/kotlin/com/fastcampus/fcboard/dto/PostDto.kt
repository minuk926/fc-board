package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Post

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostCreateDto
 * author      : limju
 * date        : 2024-02-15
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-15    limju       최초 생성
 *
 * </pre>
 */
data class PostDto(
    val title: String,
    val content: String,
    val userBy: String
) {
    fun toPostEntity() = Post(
        title = title,
        content = content,
        createdBy = userBy,
    )
}
