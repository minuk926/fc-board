package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Post
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl

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
data class PostSumaryResponseDto(
    val id: Long,
    val title: String,
    val createdBy: String,
    val createdAt: String
)

fun Page<Post>.toSumaryResponseDto() = PageImpl(
    content.map { it.toSumaryResponseDto() },
    pageable,
    totalElements,
)

fun Post.toSumaryResponseDto() = PostSumaryResponseDto(
    id = id,
    title = title,
    createdBy = createdBy,
    createdAt = createdAt.toString(),
)

