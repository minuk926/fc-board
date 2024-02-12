package com.fastcampus.fcboard.dto

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostDetailResponse
 * author      : minuk
 * date        : 2/11/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/11/24   minuk       최초 생성
 *
 * </pre>
 */
data class PostDetailResponse(
    val id: Long,
    val title: String,
    val content: String,
    val createdBy: String,
    val createdAt: String,
)
