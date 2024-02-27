package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Like
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.LikeRepository
import com.fastcampus.fcboard.repository.PostRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.service
 * fileName    : LikeService
 * author      : limju
 * date        : 2024-02-27
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-27    limju       최초 생성
 *
 * </pre>
 */
@Service
@Transactional(readOnly = true)
class LikeService(
    private val likeRepository: LikeRepository,
    private val postRepository: PostRepository
) {
    @Transactional
    fun createLike(postId: Long, createdBy: String): Long {
        val post = findPost(postId)
        return likeRepository.save(Like(post, createdBy)).id
    }

    fun countLike(postId: Long): Long = likeRepository.countByPostId(postId)

    private fun findPost(id: Long) = postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()
}
