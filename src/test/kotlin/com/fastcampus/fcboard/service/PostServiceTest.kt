package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Comment
import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.PostRequestDto
import com.fastcampus.fcboard.exception.PostNotDeletableException
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.exception.PostNotUpdatableException
import com.fastcampus.fcboard.repository.CommentRepository
import com.fastcampus.fcboard.repository.PostRepository
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.common.ExperimentalKotest
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.comparables.shouldBeGreaterThan
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.repository.findByIdOrNull

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.service
 * fileName    : PostServiceTest
 * author      : limju
 * date        : 2024-02-22
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-22    limju       최초 생성
 *
 * </pre>
 */
@OptIn(ExperimentalKotest::class)
@SpringBootTest
class PostServiceTest(
    private val postService: PostService,
    private val postRepository: PostRepository,
    private val commentRepository: CommentRepository
) : BehaviorSpec(
    {
        given("게시글 생성") {
            `when`("정상적인 게시글 생성 요청 이면") {
                val post =
                    postService.createPost(
                        PostRequestDto(
                            title = "제목",
                            content = "내용",
                            userBy = "작성자",
                        ),
                    )
                then("생성된 게시글을 확인 한다") {
                    post.id shouldBeGreaterThan 0L
                    val post = postRepository.findByIdOrNull(post.id)
                    post shouldNotBe null
                    post!!.title shouldBe "제목"
                    post.content shouldBe "내용"
                    post.createdBy shouldBe "작성자"
                }
            }
        }
        given("게시글 변경") {
            val post =
                postRepository.save(
                    Post(
                        title = "제목",
                        content = "내용",
                        createdBy = "작성자",
                    ),
                )
            `when`("정상적인 게시글 변경 요청 이면") {
                val updatedPostId =
                    postService.updatePost(
                        post.id,
                        PostRequestDto(
                            title = "수정된 제목",
                            content = "수정된 내용",
                            userBy = "작성자",
                        ),
                    )
                then("변경된 게시글을 확인 한다") {
                    updatedPostId shouldBe post.id
                    val updatedPost = postRepository.findByIdOrNull(updatedPostId)
                    updatedPost shouldNotBe null
                    updatedPost!!.title shouldBe "수정된 제목"
                    updatedPost.content shouldBe "수정된 내용"
                    updatedPost.createdBy shouldBe "작성자"
                }
            }
            `when`("변경 요청한 사용자가 게시글 작성자가 아니면") {
                then("게시글을 변경할 수 없다는 에러를 발생 시킨다") {
                    val exception =
                        shouldThrow<PostNotUpdatableException> {
                            postService.updatePost(
                                post.id,
                                PostRequestDto(
                                    title = "수정된 제목",
                                    content = "수정된 내용",
                                    userBy = "변경 요청한 사용자",
                                ),
                            )
                        }
                    exception.message shouldBe "게시글을 변경할 수 없습니다."
                }
            }
            When("변경 요청한 게시글이 없으면") {
                then("게시글을 찾을수 없다는 에러를 발생 시킨다") {
                    shouldThrow<PostNotFoundException> {
                        postService.updatePost(
                            9999L,
                            PostRequestDto(
                                title = "수정된 제목",
                                content = "수정된 내용",
                                userBy = "변경 요청한 사용자",
                            ),
                        )
                    }
                }
            }
        }
        given("게시글 삭제") {
            val post =
                postRepository.save(
                    Post(
                        title = "제목",
                        content = "내용",
                        createdBy = "작성자",
                    ),
                )
            When("삭제 요청한 게시글이 없으면") {
                Then("게시글을 찾을 수 없다는 에러를 발생 시킨다") {
                    val exception =
                        shouldThrow<PostNotFoundException> {
                            postService.deletePost(9999L, "삭제 요청한 사용자")
                        }
                    exception.message shouldBe "게시글을 찾을 수 없습니다."
                }
            }
            When("삭제 요청한 사용자가 게시글 작성자가 아니면") {
                Then("게시글을 삭제할 수 없다는 에러를 발생 시킨다") {
                    shouldThrow<PostNotDeletableException> {
                        postService.deletePost(post.id, "삭제 요청한 사용자")
                    }
                }
            }
            When("정상적인 게시글 삭제 요청 이면") {

                val deletedPostId = postService.deletePost(post.id, "작성자")
                Then("게시글이 삭제된 것을 확인 한다") {
                    deletedPostId shouldBe post.id
                    val deletePost = postRepository.findByIdOrNull(post.id)
                    deletePost shouldBe null
                }
            }
        }
        given("게시글 상세 조회") {
            val savedPost =
                postRepository.save(
                    Post(
                        title = "제목",
                        content = "내용",
                        createdBy = "작성자",
                    ),
                )
            When("게시글이 정상 조회 되면") {
                Then("조회된 게시글을 확인 한다") {
                    val post = postService.getPost(savedPost.id)
                    post.id shouldBe savedPost.id
                    post.title shouldBe "제목"
                    post.content shouldBe "내용"
                    post.createdBy shouldBe "작성자"
                }
            }
            When("게시글을 찾을 수 없으면") {
                Then("게시글을 찾을 수 없다는 에러를 발생 시킨다") {
                    shouldThrow<PostNotFoundException> {
                        postService.getPost(9999L)
                    }
                }
            }
            When("댓글이 있는 게시글을 조회 하면") {
                val comment1 =
                    commentRepository.save(
                        Comment(
                            content = "댓글-1",
                            createdBy = "댓글작성자",
                            post = savedPost,
                        ),
                    )
                Then("조회된 게시글의 댓글을 확인 한다") {
                    val post = postService.getPost(savedPost.id)
                    post.comments.size shouldBe 1
                    post.comments[0].id shouldBe comment1.id
                    post.comments[0].content shouldBe "댓글-1"
                    post.comments[0].createdBy shouldBe "댓글작성자"
                }
            }
        }
    },
)
