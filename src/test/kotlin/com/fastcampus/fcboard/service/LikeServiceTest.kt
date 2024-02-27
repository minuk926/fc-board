package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.LikeRepository
import com.fastcampus.fcboard.repository.PostRepository
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.repository.findByIdOrNull

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.service
 * fileName    : LikeServiceTest
 * author      : limju
 * date        : 2024-02-27
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-27    limju       최초 생성
 *
 * </pre>
 */
@SpringBootTest
class LikeServiceTest(
    private val likeService: LikeService,
    private val postRepository: PostRepository,
    private val likeRepository: LikeRepository
) : BehaviorSpec(
    {

        given("좋아요 생성") {
            val savedPost = postRepository.save(Post(title = "제목", content = "내용", createdBy = "작성자"))

            `when`("정상적인 좋아요 생성 요청 이면") {
                val id = likeService.createLike(savedPost.id, "좋아요 작성자")
                then("좋아요 생성 확인") {
                    val like = likeRepository.findByIdOrNull(id)
                    like shouldNotBe null
                    like?.post?.id shouldBe savedPost.id
                    like?.createdBy shouldBe "좋아요 작성자"
                }
            }
            `when`("좋아요 생성 요청 시 게시글이 없으면") {
                then("게시글이 없다는 예외 발생") {
                    shouldThrow<PostNotFoundException> {
                        likeService.createLike(0, "좋아요 작성자")
                    }
                }
            }
        }
    },
)
