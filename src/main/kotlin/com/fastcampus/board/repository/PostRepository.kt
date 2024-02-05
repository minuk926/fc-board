package com.fastcampus.board.repository

import com.fastcampus.domain.Board
import org.springframework.data.jpa.repository.JpaRepository

interface PostRepository : JpaRepository<Board, Long> {
}
