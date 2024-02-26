package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.domain.Tag

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : TagRequestDto
 * author      : limju
 * date        : 2024-02-26
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-26    limju       최초 생성
 *
 * </pre>
 */
data class TagRequestDto(
    val name: String,
    val createdBy: String
) {
    fun toEntity(post: Post) =
        Tag(
            name = name,
            post = post,
            createdBy = createdBy,
        )
}
