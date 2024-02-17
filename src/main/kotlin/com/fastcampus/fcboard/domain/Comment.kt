package com.fastcampus.fcboard.domain

import com.fastcampus.fcboard.dto.CommentDto
import jakarta.persistence.*

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.domain
 * fileName    : Comment
 * author      : minuk
 * date        : 2/17/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/17/24   minuk       최초 생성
 *
 * </pre>
 */

@Entity
@Table
class Comment(
    content: String,
    post: Post,
    createdBy: String
) : BaseEntity(createdBy) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0

    var content: String = content
        protected set

    @ManyToOne(fetch = FetchType.LAZY)
    var post: Post = post
        protected set

    fun update(commentDto: CommentDto) {
        this.content = commentDto.content
        super.updatedBy(commentDto.userBy)
    }
}
