package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Comment
import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.CommentRequestDto
import com.fastcampus.fcboard.dto.CommentResponseDto
import com.fastcampus.fcboard.dto.toCommentResponseDto
import com.fastcampus.fcboard.exception.CommentNotDeletableException
import com.fastcampus.fcboard.exception.CommentNotFoundException
import com.fastcampus.fcboard.exception.CommentNotUpdatableException
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.CommentRepository
import com.fastcampus.fcboard.repository.PostRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.service
 * fileName    : CommentService
 * author      : limju
 * date        : 2024-02-23
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-23    limju       최초 생성
 *
 * </pre>
 */
@Service
@Transactional(readOnly = true)
class CommentService(
    private val commentRepository: CommentRepository,
    private val postRepository: PostRepository
) {
    /**
     * 댓글 생성
     * @param postId 게시글 ID
     * @param commentRequestDto 댓글 생성 요청 정보
     * @return 생성한 댓글 정보
     * @throws PostNotFoundException 게시글을 찾을 수 없을 때 발생
     */
    @Transactional
    fun createComment(
        postId: Long,
        commentRequestDto: CommentRequestDto
    ): Comment {
        val post = findPost(postId)
        return commentRepository.save(commentRequestDto.toEntity(post))
    }

    /**
     * 댓글 변경
     * @param id 댓글 ID
     * @param commentRequestDto 댓글 변경 요청 정보
     * @return 변경한 댓글 정보
     * @throws CommentNotUpdatableException 댓글을 삭제할 수 없을 때 발생
     * @throws CommentNotFoundException 댓글을 변경할 수 없을 때 발생
     */
    @Transactional
    fun updateComment(
        id: Long,
        commentRequestDto: CommentRequestDto
    ): CommentResponseDto {
        val comment = findComment(id)
        comment.update(commentRequestDto)
        return commentRepository.save(comment).toCommentResponseDto()
    }

    /**
     * 댓글 삭제
     * @param id 댓글 ID
     * @param deletedBy 삭제 요청자
     * @return 삭제한 댓글 ID
     * @throws CommentNotDeletableException 댓글을 삭제할 수 없을 때 발생
     * @throws CommentNotFoundException 댓글을 찾을 수 없을 때 발생
     */
    @Transactional
    fun deleteComment(
        id: Long,
        deletedBy: String
    ): Long {
        val comment = findComment(id)
        if (comment.createdBy != deletedBy) {
            throw CommentNotDeletableException()
        }
        commentRepository.delete(comment)
        return id
    }

    /**
     * 댓글 조회
     * @param id 댓글 ID
     * @return 조회한 댓글 정보
     * @throws CommentNotFoundException 댓글을 찾을 수 없을 때 발생
     */
    private fun findComment(id: Long): Comment =
        commentRepository.findByIdOrNull(id) ?: throw CommentNotFoundException()

    /**
     * 게시글 조회
     * @param id 게시글 ID
     * @return 조회한 게시글 정보
     * @throws PostNotFoundException 게시글을 찾을 수 없을 때 발생
     */
    private fun findPost(id: Long): Post = postRepository.findByIdOrNull(id) ?: throw PostNotFoundException()
}
