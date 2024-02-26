package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Tag
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository

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
interface TagRepository : JpaRepository<Tag, Long> {
    fun findByPostId(id: Long): List<Tag>
}

interface CustomTagRepository {
    fun findPageBy(pageRequest: Pageable, tagName: String): Page<Tag>
}

class CustomTagRepositoryImpl : CustomTagRepository {
    override fun findPageBy(pageRequest: Pageable, tagName: String): Page<Tag> {
        return Page.empty()
    }
}
