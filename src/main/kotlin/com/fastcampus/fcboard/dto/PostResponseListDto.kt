package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.domain.Tag
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl
import java.time.format.DateTimeFormatter

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostResponseDto
 * author      : limju
 * date        : 2024-02-21
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-21    limju       최초 생성
 *
 * </pre>
 */
data class PostResponseListDto(
    val id: Long,
    val title: String,
    val content: String? = null,
    val firstTag: String? = null,
    val likeCount: Long = 0,
    val createdBy: String,
    val createdAt: String
)

/**
 * Post Entity to PostResponseDto
 *
 * @return PostResponseDto
 */
fun Post.toPostResponseListDto(countLike: (Long) -> (Long)) =
    PostResponseListDto(
        id = id,
        title = title,
        content = content,
        firstTag = tags.firstOrNull()?.name,
        likeCount = countLike(id),
        createdBy = createdBy,
        createdAt = createdAt.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")),
    )

fun Page<Tag>.toPostResponseListDto(countLike: (Long) -> Long) =
    PageImpl(content.map { it.post.toPostResponseListDto(countLike) }, pageable, totalElements)
