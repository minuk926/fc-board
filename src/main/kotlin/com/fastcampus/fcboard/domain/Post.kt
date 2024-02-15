package com.fastcampus.fcboard.domain

import com.fastcampus.fcboard.dto.PostDtlDto
import com.fastcampus.fcboard.dto.PostDto
import com.fastcampus.fcboard.exception.PostNotUpdatedException
import jakarta.persistence.*

@Entity
open class Post(
    title: String,
    content: String,
    createdBy: String
) : BaseEntity(createdBy) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0

    @Column(nullable = false)
    var title: String = title
        protected set

    @Lob
    @Column(nullable = false)
    var content: String = content
        protected set

    fun update(postDto: PostDto) {
        if (super.createdBy != postDto.userBy) throw PostNotUpdatedException()
        this.title = postDto.title
        this.content = postDto.content
        super.updatedBy(postDto.userBy)
    }

    fun toDetailDto() =
        PostDtlDto(
            id = this.id,
            title = this.title,
            content = this.content,
            createdBy = super.createdBy,
            createdAt = super.createdAt,
            updatedBy = super.updatedBy,
            updatedAt = super.updatedAt,

            )

}
