package com.fastcampus.fcboard.domain

import com.fastcampus.config.AllOpen
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
@AllOpen
abstract class BaseEntity(
    @CreatedBy
    @Column(updatable = false)
    val createdBy: String
) {
    @CreatedDate
    @Column(updatable = false)
    var createdAt: LocalDateTime = LocalDateTime.now()

    @LastModifiedBy
    @Column(insertable = false)
    var updatedBy: String? = null
        protected set

    @LastModifiedDate
    @Column(insertable = false)
    var updatedAt: LocalDateTime? = LocalDateTime.now()
        protected set

    fun updatedBy(userBy: String) {
        this.updatedBy = userBy
    }
}
