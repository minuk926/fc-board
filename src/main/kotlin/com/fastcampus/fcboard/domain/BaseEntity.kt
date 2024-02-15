package com.fastcampus.fcboard.domain

import jakarta.persistence.Column
import jakarta.persistence.EntityListeners
import jakarta.persistence.MappedSuperclass
import org.springframework.data.annotation.CreatedBy
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedBy
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.time.LocalDateTime

@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
abstract class BaseEntity(
    @CreatedBy
    @Column(updatable = false)
    var createdBy: String
) {

    @CreatedDate
    @Column(nullable = false, updatable = false)
    var createdAt: LocalDateTime = LocalDateTime.now()

    @LastModifiedBy
    @Column(insertable = false)
    var updatedBy: String? = null
        protected set

    @LastModifiedDate
    @Column(insertable = false)
    var updatedAt: LocalDateTime? = LocalDateTime.now()
        protected set

    fun updatedBy(updatedBy: String) {
        this.updatedBy = updatedBy
    }
}
