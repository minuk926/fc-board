package com.fastcampus.fcboard.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Lob
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@Table(name = "board")
class Board(
    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val ID: Long,

    @Column(name = "title")
    val title: String,

    @Lob
    @Column(name = "content")
    val content: String,

    @Column(name = "created_at")
    val createdAt: LocalDateTime,

    @Column(name = "created_by")
    val createdBy: String,

    @Column(name = "updated_at")
    val updatedAt: LocalDateTime? = null,

    @Column(name = "updated_by")
    val updatedBy: String? = null,

    ) {
}
