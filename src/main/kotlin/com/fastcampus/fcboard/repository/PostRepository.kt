package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Board
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PostRepository : JpaRepository<Board, Long> {
}
