package com.fastcampus.fcboard.domain

import com.fastcampus.config.AllOpen
import com.fastcampus.fcboard.dto.CommentRequestDto
import com.fastcampus.fcboard.exception.CommentNotUpdatableException
import jakarta.persistence.*

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.domain
 * fileName    : Comment
 * author      : limju
 * date        : 2024-02-22
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-22    limju       최초 생성
 *
 * </pre>
 */
@Entity
@AllOpen
class Comment(
    content: String,
    post: Post,
    createdBy: String
) : BaseEntity(createdBy) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L

    var content: String = content
        protected set

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = ForeignKey(ConstraintMode.NO_CONSTRAINT))
    var post: Post = post
        protected set

    fun update(commentRequestDto: CommentRequestDto) {
        if (createdBy != commentRequestDto.userBy) throw CommentNotUpdatableException()
        this.content = commentRequestDto.content
        super.updateUpdatedBy(commentRequestDto.userBy)
    }
}
