package com.fastcampus.fcboard.domain

import com.fastcampus.fcboard.dto.PostDto
import com.fastcampus.fcboard.dto.PostInfoDto
import com.fastcampus.fcboard.exception.PostNotFoundException
import jakarta.persistence.*

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.domain
( * fileName    : Post
 * author      : limju
 * date        : 2024-02-16
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-16    limju       최초 생성
 *
 * </pre>
 */
@Entity
@Table
class Post(
    title: String,
    content: String,
    createdBy: String
) : BaseEntity(createdBy) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0

    var title: String = title
        protected set

    @Lob
    var content: String = content
        protected set

    @OneToMany(mappedBy = "post", fetch = FetchType.LAZY, orphanRemoval = true, cascade = [CascadeType.ALL])
    var comments: MutableList<Comment> = mutableListOf()

    fun update(postDto: PostDto) {
        if (super.createdBy != postDto.userBy) throw PostNotFoundException()
        this.title = postDto.title
        this.content = postDto.content
        super.updatedBy(postDto.userBy)
    }

    fun toPostInfoDto(): PostInfoDto =
        PostInfoDto(
            id = id,
            title = title,
            content = content,
            createdBy = super.createdBy,
            createdAt = super.createdAt.toString(),
            updatedBy = super.updatedBy,
            updatedAt = super.updatedAt.toString(),
        )
}
