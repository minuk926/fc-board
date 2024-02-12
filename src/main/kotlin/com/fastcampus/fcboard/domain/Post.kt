@file:Suppress("ktlint:standard:no-wildcard-imports")

package com.fastcampus.fcboard.domain

import com.fastcampus.fcboard.dto.PostUpdatedRequestDto
import com.fastcampus.fcboard.exception.PostNotUpdatedException
import jakarta.persistence.*

@Entity
class Post(
    title: String,
    content: String,
    createdBy: String,
) : BaseEntity(
        createdBy,
    ) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0

    var title: String = title
        protected set

    @Lob
    var content: String = content
        protected set

    fun update(postUpdatedRequestDto: PostUpdatedRequestDto) {
        if (super.createdBy != postUpdatedRequestDto.updatedBy) throw PostNotUpdatedException()
        title = postUpdatedRequestDto.title
        content = postUpdatedRequestDto.content
        super.updatedBy(postUpdatedRequestDto.updatedBy)
    }
}

// fun Post.toDto() =
//    title = title
