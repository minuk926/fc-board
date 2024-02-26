package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Tag
import java.time.format.DateTimeFormatter

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : TagResponseDto
 * author      : limju
 * date        : 2024-02-26
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-26    limju       최초 생성
 *
 * </pre>
 */
data class TagResponseDto(
    val id: Long,
    val name: String,
    val createdBy: String,
    val createdAt: String
)

fun Tag.toTagResponseDto() =
    TagResponseDto(
        id = id,
        name = name,
        createdBy = createdBy,
        createdAt = createdAt.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")),
    )
