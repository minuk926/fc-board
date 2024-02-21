package com.fastcampus.fcboard.domain

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.domain
 * fileName    : Post
 * author      : limju
 * date        : 2024-02-21
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-21    limju       최초 생성
 *
 * </pre>
 */
@Entity
class Post(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0L,
        var title: String,
        var content: String,
        createdBy: String) : BaseEntity(createdBy) {
}
