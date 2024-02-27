package com.fastcampus.fcboard.domain

import com.fastcampus.config.AllOpen
import com.fastcampus.fcboard.dto.TagRequestDto
import jakarta.persistence.*

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.domain
 * fileName    : Tag
 * author      : limju
 * date        : 2024-02-26
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-26    limju       최초 생성
 *
 * </pre>
 */
@Entity
@AllOpen
class Tag(
    name: String,
    post: Post,
    createdBy: String
) : BaseEntity(createdBy) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L

    var name: String = name
        protected set

    @ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(foreignKey = ForeignKey(ConstraintMode.NO_CONSTRAINT))
    var post: Post = post
        protected set

    fun update(tagRequestDto: TagRequestDto) {
        this.name = tagRequestDto.name
        super.updateUpdatedBy(tagRequestDto.createdBy)
    }
}
