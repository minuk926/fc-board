package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.PostCreateRequestDto
import com.fastcampus.fcboard.dto.PostUpdatedRequestDto
import com.fastcampus.fcboard.exception.PostNotDeleteException
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.exception.PostNotUpdatedException
import com.fastcampus.fcboard.repository.PostRepository
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.longs.shouldBeGreaterThan
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.repository.findByIdOrNull

@SpringBootTest
class PostServiceTest(
    private val postService: PostService,
    private val postRepository: PostRepository,
) : BehaviorSpec({
        given("게시글 생성시") {
            When("게시글 입력이 정상적으로 들어오면") {
                val postId =
                    postService.createPost(
                        PostCreateRequestDto(
                            title = "subject",
                            content = "contents",
                            createdBy = "user1",
                        ),
                    )
                then("게시글이 정상적으로 생성됨을 확인한다") {
                    postId shouldBeGreaterThan 0L
                    val post = postRepository.findByIdOrNull(postId)
                    post shouldNotBe null
                    post?.title shouldBe "subject"
                    post?.content shouldBe "contents"
                    post?.createdBy shouldBe "user1"
                }
            }
        }
        given("게시글 변경시") {
            val saved: Post = postRepository.save(Post(title = "title", content = "contents", createdBy = "user"))
            When("정상 변경시") {
                val updatedId =
                    postService.updatePost(
                        saved.id,
                        PostUpdatedRequestDto(
                            title = "update title",
                            content = "update content",
                            updatedBy = "user",
                        ),
                    )
                then("게시글이 정상적으로 변경됨을 확인한다.") {
                    saved.id shouldBe updatedId
                    val updated: Post? = postRepository.findByIdOrNull(updatedId)
                    updated shouldNotBe null
                    updated?.title shouldBe "update title"
                    updated?.content shouldBe "update content"
                    updated?.updatedBy shouldBe "user"
                }
            }
            When("게시물이 없을때") {
                then("게시물을 찾을수 없다는 예외가 발생 한다") {
                    shouldThrow<PostNotFoundException> {
                        postService.updatePost(
                            9999L,
                            PostUpdatedRequestDto(
                                title = "update title",
                                content = "update content",
                                updatedBy = "update user",
                            ),
                        )
                    }
                }
            }
            When("작성자가 변경자와 동일하지 않으면") {
                then("변경할 수 없는 게시물 입니다 예외 발생") {
                    shouldThrow<PostNotUpdatedException> {
                        postService.updatePost(
                            saved.id,
                            PostUpdatedRequestDto(
                                title = "update title",
                                content = "update content",
                                updatedBy = "update user",
                            ),
                        )
                    }
                }
            }
        }
        given("게시글 삭제시") {
            val saved: Post = postRepository.save(Post(title = "title", content = "contents", createdBy = "user"))

            When("작성자와 동일하지 않으면") {
                then("삭제할 수 없는 게시물 입니다 예외 발생") {
                    shouldThrow<PostNotDeleteException> {
                        postService.deletePost(saved.id, "user111")
                    }
                }
            }
            When("정상 삭제시") {
                val postId = postService.deletePost(saved.id, saved.createdBy)
                then("게시글이 정상으로 삭제 되었음을 확인 한다") {
                    postId shouldBe saved.id
                    postRepository.findByIdOrNull(postId) shouldBe null
                }
            }
        }
    })
