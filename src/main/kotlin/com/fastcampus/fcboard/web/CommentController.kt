package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.dto.CommentDto
import com.fastcampus.fcboard.service.CommentService
import org.springframework.web.bind.annotation.*

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.web
 * fileName    : CommentController
 * author      : minuk
 * date        : 2/17/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/17/24   minuk       최초 생성
 *
 * </pre>
 */
@RestController
class CommentController(
    private val commentService: CommentService
) {
    @PostMapping("/posts/{postId}/comments")
    fun createComment(
        @PathVariable postId: Long,
        @RequestBody commentDto: CommentDto
    ): Long = commentService.createComment(postId, commentDto)

    @PutMapping("/comments/{commentId}")
    fun updateComment(
        @PathVariable commentId: Long,
        @RequestBody commentDto: CommentDto
    ): Long = commentService.updateComment(commentId, commentDto)

    @DeleteMapping("/comments/{commentId}")
    fun deleteComment(
        @PathVariable commentId: Long,
        @RequestParam deletedBy: String
    ): Long = commentService.deleteComment(commentId, deletedBy)
}
