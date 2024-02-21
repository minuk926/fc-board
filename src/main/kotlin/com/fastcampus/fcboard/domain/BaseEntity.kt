package com.fastcampus.fcboard.domain

import jakarta.persistence.Column
import jakarta.persistence.EntityListeners
import jakarta.persistence.MappedSuperclass
import org.springframework.data.annotation.CreatedBy
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedBy
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.time.LocalDateTime

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.domain
 * fileName    : BaseEntity
 * author      : limju
 * date        : 2024-02-21
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-21    limju       최초 생성
 *
 * </pre>
 */
@MappedSuperclass
@EntityListeners(value = [AuditingEntityListener::class])
abstract class BaseEntity(
    craetedBy: String,
) {
    @CreatedBy
    @Column(updatable = false)
    val createdBy: String = craetedBy

    @CreatedDate
    @Column(updatable = false)
    var createdAt: LocalDateTime = LocalDateTime.now()
        private set

    @LastModifiedBy
    @Column(insertable = false)
    var updatedBy: String? = null
        protected set

    @LastModifiedBy
    @Column(insertable = false)
    var updatedAt: LocalDateTime? = LocalDateTime.now()
        protected set

    fun updateUpdatedBy(updatedBy: String) {
        this.updatedBy = updatedBy
    }
}
