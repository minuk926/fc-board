package com.fastcampus.fcboard.domain

import com.fastcampus.fcboard.dto.PostRequestDto
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
class Post(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L,
    var title: String,
    var content: String,
    // FetchType.EAGER|LAZY 판단 필요
    @OneToMany(mappedBy = "post", cascade = [CascadeType.ALL], orphanRemoval = true)
    val comments: MutableList<Comment> = mutableListOf(),
    createdBy: String
) : BaseEntity(createdBy) {
    /**
     * 댓글 변경시 Post Entity set
     *
     * @param postRequestDto 댓글 변경 정보
     */
    fun update(postRequestDto: PostRequestDto) {
        this.title = postRequestDto.title
        this.content = postRequestDto.content
        super.updateUpdatedBy(postRequestDto.userBy)
    }
}
