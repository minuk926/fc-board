package com.fastcampus.fcboard.domain

import jakarta.persistence.*

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.domain
 * fileName    : Like
 * author      : minuk
 * date        : 2/27/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/27/24   minuk       최초 생성
 *
 * </pre>
 */
@Entity
@Table(name = "likes")
class Like(
    post: Post,
    createdBy: String
) : BaseEntity(createdBy) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L

    @ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(foreignKey = ForeignKey(ConstraintMode.NO_CONSTRAINT))
    var post: Post = post
        protected set
}
