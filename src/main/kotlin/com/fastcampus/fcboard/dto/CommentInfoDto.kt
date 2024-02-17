package com.fastcampus.fcboard.dto

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : CommentInfoDto
 * author      : minuk
 * date        : 2/17/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/17/24   minuk       최초 생성
 *
 * </pre>
 */
data class CommentInfoDto(
    val id: Long,
    val content: String,
    val createdBy: String,
    val createdAt: String
)
