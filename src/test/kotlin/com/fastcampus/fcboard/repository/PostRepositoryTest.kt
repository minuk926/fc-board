package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Comment
import com.fastcampus.fcboard.domain.Post
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.repository
 * fileName    : PostRepositoryTest
 * author      : limju
 * date        : 2024-02-21
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-21    limju       최초 생성
 *
 * </pre>
 */
@DataJpaTest // (showSql = true, properties = ["spring.jpa.properties.hibernate.format_sql=true"])
class PostRepositoryTest {
    @Autowired
    lateinit var testEntityManager: TestEntityManager

    @Autowired
    lateinit var postRepository: PostRepository

    @Autowired
    lateinit var commentRepository: CommentRepository

    @Test
    @DisplayName("게시글 생성 및 변경 테스트")
    fun `게시글 생성 및 조회 테스트`() {
        // given
        val post = Post(title = "제목-1", content = "내용-1", createdBy = "limju")
        postRepository.save(post)

        commentRepository.save(Comment(content = "댓글-1", createdBy = "limju-1", post = post))
        commentRepository.save(Comment(content = "댓글-2", createdBy = "limju-1", post = post))
        commentRepository.save(Comment(content = "댓글-3", createdBy = "limju-1", post = post))

        // 조회전에 영속성 컨텍스트를 초기화 해야함
        testEntityManager.clear()

        // when
        val savedPost: Post = postRepository.findById(post.id).get()

        // then
        assert(savedPost.title == post.title)
        assert(savedPost.content == post.content)
        assert(savedPost.createdBy == post.createdBy)
        assert(savedPost.comments.size == 3)
        assert(savedPost.comments[0].content == "댓글-1")
        assert(savedPost.comments[1].content == "댓글-2")
        assert(savedPost.comments[2].content == "댓글-3")
    }
}
