package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.domain.QPost.post
import com.fastcampus.fcboard.dto.PostSchDto
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport

interface PostRepository : JpaRepository<Post, Long>, CustomPostRepository

interface CustomPostRepository {
    fun findPageBy(pageable: Pageable, postSchDto: PostSchDto): Page<Post>
}

class CustomPostRepositoryImpl : CustomPostRepository, QuerydslRepositorySupport(Post::class.java) {
    override fun findPageBy(pageable: Pageable, postSchDto: PostSchDto): Page<Post> {
        val fetchResults = from(post)
            .where(
                postSchDto.title?.let { post.title.contains(it) },
                postSchDto.content?.let { post.title.contains(it) },
                postSchDto.createdBy?.let { post.createdBy.eq(it) },
            )
            .orderBy(post.createdAt.desc())
            .offset(pageable.offset)
            .limit(pageable.pageSize.toLong())
            .fetchResults()

        return PageImpl(fetchResults.results, pageable, fetchResults.total)
    }
}
