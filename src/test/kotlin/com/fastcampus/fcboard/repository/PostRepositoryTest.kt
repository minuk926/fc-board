package com.fastcampus.fcboard.repository

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
@DataJpaTest(showSql = true, properties = ["spring.jpa.properties.hibernate.format_sql=true"])
class PostRepositoryTest {
    @Autowired
    lateinit var testEntityManager: TestEntityManager

    @Autowired
    lateinit var postRepository: PostRepository

    @Test
    @DisplayName("게시글 생성 및 변경 테스트")
    fun `게시글 생성 및 조회 테스트`() {
        // given
        val post = Post(title = "제목", content = "내용", createdBy = "limju")
        //testEntityManager.persistAndFlush(post)
        //testEntityManager.detach(post)
        postRepository.save(post)
        //postRepository.flush()

        // when
        val savedPost = postRepository.findById(post.id).get()

        // then
        assert(savedPost.title == post.title)
        assert(savedPost.content == post.content)

        // when
        savedPost.title = "제목2"
        savedPost.content = "내용2"
        savedPost.updateUpdatedBy("limju2")
        val updatePost = postRepository.save(savedPost)
        postRepository.flush()

        // then
        assert(updatePost.title == "제목")
        assert(updatePost.content == "내용2")
        assert(updatePost.updatedBy == "limju2")
    }
}
