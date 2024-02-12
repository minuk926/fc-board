package com.fastcampus.fcboard.dto

import com.fastcampus.fcboard.domain.Post

data class PostUpdatedRequestDto(
    var title: String,
    var content: String,
    val updatedBy: String,
) {
    fun update(post: Post)  {
        title = post.title
        content = post.content
    }
}
