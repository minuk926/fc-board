package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.domain.QPost
import com.fastcampus.fcboard.domain.QPost.post
import com.fastcampus.fcboard.domain.QTag.tag
import com.fastcampus.fcboard.domain.Tag
import com.querydsl.core.types.Expression
import com.querydsl.core.types.Order
import com.querydsl.core.types.OrderSpecifier
import com.querydsl.core.types.dsl.PathBuilder
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
 * fileName    : TagRepository
 * author      : limju
 * date        : 2024-02-26
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-26    limju       최초 생성
 *
 * </pre>
 */
interface TagRepository : JpaRepository<Tag, Long>, CustomTagRepository {
    fun findByPostId(id: Long): List<Tag>
}

interface CustomTagRepository {
    fun findByPage(pageable: Pageable, tagName: String): Page<Tag>
}

class CustomTagRepositoryImpl : CustomTagRepository, QuerydslRepositorySupport(Tag::class.java) {
    override fun findByPage(pageable: Pageable, tagName: String): Page<Tag> {
        val orders = mutableListOf<OrderSpecifier<*>>()
        pageable.sort.forEach { sort ->
            val pathBuilder: PathBuilder<Post> = PathBuilder(QPost.post.type, QPost.post.metadata)
            orders.add(
                OrderSpecifier(
                    if (sort.isAscending) Order.ASC else Order.DESC,
                    pathBuilder.get(sort.property) as Expression<out Comparable<*>>,
                ),
            )
        }
        if (orders.isEmpty()) {
            orders.add(OrderSpecifier(Order.DESC, QPost.post.createdAt))
        }

        return from(tag)
            .join(tag.post, post).fetchJoin()
            .where(tag.name.eq(tagName))
            .orderBy(*orders.toTypedArray())
            .offset(pageable.offset)
            .limit(pageable.pageSize.toLong())
            .fetchResults()
            .let {
                PageImpl(it.results, pageable, it.total)
            }
    }
}
