package com.fastcampus.fcboard.domain

import com.fastcampus.config.AllOpen
import com.fastcampus.fcboard.dto.PostRequestDto
import com.fastcampus.fcboard.exception.PostNotUpdatableException
import jakarta.persistence.*

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.domain
 * fileName    : Post
 * author      : limju
 * date        : 2024-02-21
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-21    limju       최초 생성
 *
 * </pre>
 */
@Entity
@AllOpen
class Post(
    title: String,
    content: String,
    tags: List<String> = emptyList(),
    createdBy: String
) : BaseEntity(createdBy) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L
    var title: String = title
        protected set
    var content: String = content
        protected set

    // FetchType.EAGER|LAZY 판단 필요
    @OneToMany(mappedBy = "post", cascade = [CascadeType.ALL], orphanRemoval = true)
    var comments: MutableList<Comment> = mutableListOf()
        protected set

    @OneToMany(mappedBy = "post", cascade = [CascadeType.ALL], orphanRemoval = true)
    var tags: MutableList<Tag> = tags.map { Tag(name = it, post = this, createdBy = createdBy) }.toMutableList()
        protected set

    /**
     * 댓글 변경시 Post Entity set
     *
     * @param postRequestDto 댓글 변경 정보
     */
    fun update(postRequestDto: PostRequestDto) {
        if (createdBy != postRequestDto.userBy) throw PostNotUpdatableException()
        this.title = postRequestDto.title
        this.content = postRequestDto.content
        replaceTags(postRequestDto.tags)
        super.updateUpdatedBy(postRequestDto.userBy)
    }

    private fun replaceTags(tags: List<String>) {
        if (this.tags.map { it.name } != tags) {
            this.tags.clear()
            this.tags.addAll(tags.map { Tag(name = it, post = this, createdBy = createdBy) })
        }
    }
}
