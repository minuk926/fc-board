package com.fastcampus.fcboard.domain

import com.fastcampus.config.AllOpen
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
@AllOpen
abstract class BaseEntity(
    createdBy: String
) {
    @CreatedBy
    @Column(nullable = false, updatable = false)
    var createdBy: String = createdBy
        protected set

    @CreatedDate
    @Column(nullable = false, updatable = false)
    var createdAt: LocalDateTime = LocalDateTime.now()
        protected set

    @LastModifiedBy
    @Column(insertable = false)
    var updatedBy: String? = null
        protected set

    @LastModifiedBy
    @Column(insertable = false)
    var updatedAt: LocalDateTime? = null
        protected set

    /**
     *
     * update 시 변경자 set
     * update 시간도 현재 시간으로 set
     * @param createdBy 생성자
     */
    fun updateUpdatedBy(updatedBy: String) {
        this.updatedBy = updatedBy
        this.updatedAt = LocalDateTime.now()
    }
}
