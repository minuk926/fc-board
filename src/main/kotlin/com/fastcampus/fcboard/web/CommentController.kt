package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.dto.CommentRequestDto
import com.fastcampus.fcboard.dto.CommentResponseDto
import com.fastcampus.fcboard.dto.toCommentResponseDto
import com.fastcampus.fcboard.service.CommentService
import org.springframework.web.bind.annotation.*

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.web
 * fileName    : CommentController
 * author      : limju
 * date        : 2024-02-23
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-23    limju       최초 생성
 *
 * </pre>
 */
@RestController
class CommentController(
    private val commentService: CommentService
) {
    /**
     * 댓글 생성
     * @param postId 게시글 ID
     * @param commentRequestDto 댓글 생성 요청 정보
     * @return 생성한 댓글 정보
     */
    @PostMapping("/posts/{postId}/comments")
    fun createComment(
        @PathVariable postId: Long,
        @RequestBody commentRequestDto: CommentRequestDto
    ): CommentResponseDto {
        return commentService.createComment(postId, commentRequestDto).toCommentResponseDto()
    }

    /**
     * 댓글 변경
     * @param id 댓글 ID
     * @param commentRequestDto 댓글 변경 요청 정보
     * @return 변경한 댓글 ID
     */
    @PutMapping("/comments/{id}")
    fun updateComment(
        @PathVariable id: Long,
        @RequestBody commentRequestDto: CommentRequestDto
    ): Long {
        return commentService.updateComment(id, commentRequestDto)
    }

    /**
     * 댓글 삭제
     * @param id 댓글 ID
     * @param deletedBy 삭제자
     * @return 삭제한 댓글 ID
     */
    @DeleteMapping("/comments/{id}")
    fun deleteComment(
        @PathVariable id: Long,
        @RequestParam deletedBy: String
    ): Long {
        return commentService.deleteComment(id, deletedBy)
    }
}
