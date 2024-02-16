package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.PostDto
import com.fastcampus.fcboard.dto.PostSearchDto
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.exception.PostNotUpdatedException
import com.fastcampus.fcboard.repository.PostRepository
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.longs.shouldBeGreaterThan
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import io.kotest.matchers.string.shouldContain
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.domain.PageRequest
import org.springframework.data.repository.findByIdOrNull

@SpringBootTest
class PostServiceTest(
    private val postService: PostService,
    private val postRepository: PostRepository
) : BehaviorSpec(
    {
        beforeSpec {
            postRepository.saveAll(
                listOf(
                    Post(title = "title1", content = "contents1", createdBy = "user1"),
                    Post(title = "title12", content = "contents2", createdBy = "user1"),
                    Post(title = "title13", content = "contents3", createdBy = "user1"),
                    Post(title = "title14", content = "contents4", createdBy = "user1"),
                    Post(title = "title15", content = "contents5", createdBy = "user1"),
                    Post(title = "title6", content = "contents6", createdBy = "user2"),
                    Post(title = "title7", content = "contents7", createdBy = "user2"),
                    Post(title = "title8", content = "contents8", createdBy = "user2"),
                    Post(title = "title9", content = "contents9", createdBy = "user2"),
                    Post(title = "title10", content = "contents10", createdBy = "user2"),
                ),
            )
        }
        given("게시글 생성시") {
            When("게시글 입력이 정상적으로 들어오면") {
                val postId =
                    postService.createPost(
                        PostDto(
                            title = "subject",
                            content = "contents",
                            userBy = "user1",
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
                        PostDto(
                            title = "update title",
                            content = "update content",
                            userBy = "user",
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
                            PostDto(
                                title = "update title",
                                content = "update content",
                                userBy = "update user",
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
                            PostDto(
                                title = "update title",
                                content = "update content",
                                userBy = "update user",
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
                    shouldThrow<PostNotUpdatedException> {
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
        given("게시글 상세 조회시") {
            val saved = postRepository.save(Post(title = "title", content = "contents", createdBy = "user"))
            When("정상 조회시") {
                val post = postService.getPost(saved.id)
                then("게시글 내용이 정상적으로 반환 된다") {
                    post shouldNotBe null
                    post.id shouldBe saved.id
                    post.title shouldBe saved.title
                    post.content shouldBe saved.content
                    post.createdBy shouldBe saved.createdBy
                }
            }
            When("조회 실패시") {
                then("게시글을 찾을 수 없다는 예외 발생") {
                    shouldThrow<PostNotFoundException> {
                        postService.getPost(9999L)
                    }
                }
            }
        }
        given("게시글 목록 조회시") {
            When("정상 조회시") {
                val postPage = postService.getPosts(PageRequest.of(0, 5), PostSearchDto())
                then("게시글 페이지가 반환 된다") {
                    postPage.number shouldBe 0
                    postPage.size shouldBe 5
                    postPage.content.size shouldBe 5
                    postPage.content[0].title shouldContain "title"
                    postPage.content[0].createdBy shouldContain "user"
                }
            }
            When("타이틀로 검색") {
                val postPage = postService.getPosts(PageRequest.of(0, 5), PostSearchDto(title = "title1"))
                then("타이틀에 해당하는 데이타가 조회 된다") {
                    postPage.number shouldBe 0
                    postPage.size shouldBe 5
                    postPage.content.size shouldBe 5
                    postPage.content[0].title shouldContain "title1"
                    postPage.content[0].createdBy shouldContain "user"
                }
            }
            When("게시자로 검색") {
                val postPage = postService.getPosts(PageRequest.of(0, 5), PostSearchDto(createdBy = "user1"))
                then("게시자에 해당하는 데이타가 조회 된다") {
                    postPage.number shouldBe 0
                    postPage.size shouldBe 5
                    postPage.content.size shouldBe 5
                    postPage.content[0].title shouldContain "title"
                    postPage.content[0].createdBy shouldContain "user1"
                }
            }
        }
    },
)
