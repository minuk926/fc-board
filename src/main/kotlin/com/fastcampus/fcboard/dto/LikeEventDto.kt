package com.fastcampus.fcboard.dto

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : LikeEventDto
 * author      : limju
 * date        : 2024-02-28
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-28    limju       최초 생성
 *
 * </pre>
 */
data class LikeEventDto(
    val postId: Long,
    val createdBy: String
)
