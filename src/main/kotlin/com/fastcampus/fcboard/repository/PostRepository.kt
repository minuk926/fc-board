package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Post
import org.springframework.data.jpa.repository.JpaRepository

// @Repository
interface PostRepository : JpaRepository<Post, Long>
