package com.fastcampus.fcboard.event

import com.fastcampus.fcboard.domain.Like
import com.fastcampus.fcboard.dto.LikeEventDto
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.LikeRepository
import com.fastcampus.fcboard.repository.PostRepository
import com.fastcampus.util.RedisUtil
import org.springframework.data.repository.findByIdOrNull
import org.springframework.scheduling.annotation.Async
import org.springframework.stereotype.Service
import org.springframework.transaction.event.TransactionalEventListener

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.event
 * fileName    : LikeEventHandler
 * author      : limju
 * date        : 2024-02-28
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-28    limju       최초 생성
 *
 * </pre>
 */
@Service
class LikeEventHandler(
    private val postRepository: PostRepository,
    private val likeRepository: LikeRepository,
    private val redisUtil: RedisUtil
) {
    @Async
    @TransactionalEventListener(LikeEventDto::class)
    fun handleLikeEvent(likeEventDto: LikeEventDto) {
        //Thread.sleep(3000)
        val post = postRepository.findByIdOrNull(likeEventDto.postId) ?: throw PostNotFoundException()
        redisUtil.increment(redisUtil.getLikeCountKey(likeEventDto.postId))
        likeRepository.save(Like(post, likeEventDto.createdBy))
    }
}
