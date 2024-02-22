package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Post

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostDto
 * author      : limju
 * date        : 2024-02-21
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-21    limju       최초 생성
 *
 * </pre>
 */
data class PostRequestDto(
    val title: String,
    val content: String,
    val userBy: String
) {
    /**
     * PostRequestDto to Post Entity
     *
     * @return Post
     */
    fun toEntity() =
        Post(
            title = title,
            content = content,
            createdBy = userBy,
        )
}
