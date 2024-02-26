package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.domain.QPost.post
import com.fastcampus.fcboard.dto.PostSearchDto
import com.querydsl.core.types.Expression
import com.querydsl.core.types.Order
import com.querydsl.core.types.OrderSpecifier
import com.querydsl.core.types.dsl.PathBuilder
import org.apache.commons.lang3.ObjectUtils.isNotEmpty
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.repository
 * fileName    : PostRepository
 * author      : limju
 * date        : 2024-02-21
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-21    limju       최초 생성
 *
 * </pre>
 */
interface PostRepository : JpaRepository<Post, Long>, CustomPostRepository

interface CustomPostRepository {
    fun findByPage(
        pageable: Pageable,
        postSearchDto: PostSearchDto
    ): Page<Post>
}

class CustomPostRepositoryImpl : CustomPostRepository, QuerydslRepositorySupport(Post::class.java) {
    override fun findByPage(
        pageable: Pageable,
        postSearchDto: PostSearchDto
    ): Page<Post> {
        val orders = mutableListOf<OrderSpecifier<*>>()
        pageable.sort.forEach { sort ->
            val pathBuilder: PathBuilder<Post> = PathBuilder(post.type, post.metadata)
            orders.add(
                OrderSpecifier(
                    if (sort.isAscending) Order.ASC else Order.DESC,
                    pathBuilder.get(sort.property) as Expression<out Comparable<*>>,
                ),
            )
        }
        if (orders.isEmpty()) {
            orders.add(OrderSpecifier(Order.DESC, post.createdAt))
        }

        val result =
            from(post)
                .where(
                    postSearchDto.title?.let {
                        if (isNotEmpty(it)) post.title.contains(it) else null
                    },
                    postSearchDto.content?.let {
                        if (isNotEmpty(it)) post.content.contains(it) else null
                    },
                    postSearchDto.createdBy?.let {
                        if (isNotEmpty(it)) post.createdBy.contains(it) else null
                    },
                    postSearchDto.tag?.let {
                        if (isNotEmpty(it)) post.tags.any().name.eq(it) else null
                    },
                )
                .orderBy(*orders.toTypedArray())
                .offset(pageable.offset)
                .limit(pageable.pageSize.toLong())
                .fetchResults()
        return PageImpl(result.results, pageable, result.total)
    }
}
