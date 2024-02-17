package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.dto.CommentDto
import com.fastcampus.fcboard.exception.CommentNotFoundException
import com.fastcampus.fcboard.exception.CommentNotUpdatedException
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.CommentRepository
import com.fastcampus.fcboard.repository.PostRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.service
 * fileName    : CommentService
 * author      : minuk
 * date        : 2/17/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/17/24   minuk       최초 생성
 *
 * </pre>
 */
@Service
class CommentService(
    private val commentRepository: CommentRepository,
    private val postRepository: PostRepository
) {
    @Transactional
    fun createComment(
        postId: Long,
        commentDto: CommentDto
    ): Long {
        val post = postRepository.findByIdOrNull(postId) ?: throw PostNotFoundException()

        return commentRepository.save(commentDto.toEntity(post)).id
    }

    @Transactional
    fun updateComment(
        commentId: Long,
        commentDto: CommentDto
    ): Long {
        val comment = commentRepository.findByIdOrNull(commentId) ?: throw CommentNotFoundException()

        if (commentDto.userBy != comment.createdBy) throw CommentNotUpdatedException()
        comment.update(commentDto)

        return commentRepository.save(comment).id
    }

    @Transactional
    fun deleteComment(
        commentId: Long,
        deletedBy: String
    ): Long {
        val comment = commentRepository.findByIdOrNull(commentId) ?: throw CommentNotFoundException()

        if (deletedBy != comment.createdBy) throw CommentNotUpdatedException()
        commentRepository.delete(comment)

        return commentId
    }
}
