package com.fastcampus.fcboard.dto

import java.time.LocalDateTime

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostDtlDto
 * author      : limju
 * date        : 2024-02-15
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-15    limju       최초 생성
 *
 * </pre>
 */
data class PostDtlDto(
    val id: Long,
    val title: String,
    val content: String,
    val createdBy: String,
    val createdAt: LocalDateTime,
    val updatedBy: String?,
    val updatedAt: LocalDateTime?
)
