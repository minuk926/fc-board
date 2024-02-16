package com.fastcampus.fcboard.dto

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostSearchDto
 * author      : limju
 * date        : 2024-02-16
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-16    limju       최초 생성
 *
 * </pre>
 */
data class PostSearchDto(
    val title: String? = null,
    val content: String? = null,
    val createdBy: String? = null
)
