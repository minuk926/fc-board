package com.fastcampus.board.model

import com.fastcampus.domain.Board
import java.time.LocalDateTime

data class PostResponse(
    val id: Long,
    val title: String,
    val content: String,
    val createdBy: String,
    val createdAt: LocalDateTime,
) {
    companion object {
        fun of(board: Board): PostResponse {
            return PostResponse(
                id = board.ID,
                title = board.title,
                content = board.content,
                createdBy = board.createdBy,
                createdAt = board.createdAt,
            )
        }
    }
}
