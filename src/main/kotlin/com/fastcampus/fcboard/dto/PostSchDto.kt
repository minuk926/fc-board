package com.fastcampus.fcboard.dto

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostSchDto
 * author      : limju
 * date        : 2024-02-15
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-15    limju       최초 생성
 *
 * </pre>
 */
data class PostSchDto(
    val title: String? = null,
    val content: String? = null,
    val createdBy: String? = null
)
