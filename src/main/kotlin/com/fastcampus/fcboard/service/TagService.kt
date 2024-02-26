package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.TagRequestDto
import com.fastcampus.fcboard.dto.TagResponseDto
import com.fastcampus.fcboard.dto.toTagResponseDto
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.PostRepository
import com.fastcampus.fcboard.repository.TagRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.service
 * fileName    : TagService
 * author      : limju
 * date        : 2024-02-26
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-26    limju       최초 생성
 *
 * </pre>
 */
@Service
@Transactional(readOnly = true)
class TagService(
    private val tagRepository: TagRepository,
    private val postRepository: PostRepository
) {
    @Transactional
    fun createTag(postId: Long, tagRequestDto: TagRequestDto): TagResponseDto {
        val post = findPost(postId)
        return tagRepository.save(tagRequestDto.toEntity(post)).toTagResponseDto()
    }

    private fun findPost(postId: Long): Post {
        return postRepository.findByIdOrNull(postId) ?: throw PostNotFoundException()
    }
}
