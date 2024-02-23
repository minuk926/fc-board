package com.fastcampus.fcboard.domain

import com.fastcampus.fcboard.dto.CommentRequestDto
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
class Comment(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L,

    var content: String,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = ForeignKey(ConstraintMode.NO_CONSTRAINT))
    val post: Post,

    createdBy: String
) : BaseEntity(createdBy) {

    fun update(commentRequestDto: CommentRequestDto) {
        this.content = commentRequestDto.content
        super.updateUpdatedBy(commentRequestDto.userBy)
    }
}
