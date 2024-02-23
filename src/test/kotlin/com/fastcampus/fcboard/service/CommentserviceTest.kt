package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Comment
import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.CommentRequestDto
import com.fastcampus.fcboard.exception.CommentNotDeletableException
import com.fastcampus.fcboard.exception.CommentNotFoundException
import com.fastcampus.fcboard.exception.CommentNotUpdatableException
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.repository.CommentRepository
import com.fastcampus.fcboard.repository.PostRepository
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.longs.shouldBeGreaterThan
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.repository.findByIdOrNull

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.service
 * fileName    : CommentserviceTest
 * author      : limju
 * date        : 2024-02-23
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-23    limju       최초 생성
 *
 * </pre>
 */
@SpringBootTest
class CommentserviceTest(
    private val commentService: CommentService,
    private val postRepository: PostRepository,
    private val commentRepository: CommentRepository
) : BehaviorSpec(
    {

        given("게시글의 댓글 생성") {
            val savedPost = postRepository.save(
                Post(title = "제목", content = "내용", createdBy = "작성자"),
            )
            When("정상적인 댓글이 생성 요청 이면") {
                val commentId = commentService.createComment(
                    savedPost.id,
                    CommentRequestDto(
                        content = "댓글 내용",
                        userBy = "댓글 작성자",
                    ),
                )
                Then("생성된 댓글을 확인 한다") {
                    commentId shouldBeGreaterThan 0
                    val comment: Comment? = commentRepository.findByIdOrNull(commentId)
                    comment shouldNotBe null
                    comment!!.content shouldBe "댓글 내용"
                    comment.createdBy shouldBe "댓글 작성자"

                }
            }
            When("게시글이 없는 댓글 생성 요청 이면") {
                then("게시글을 찾을수 없다는 에러가 발생 한다") {
                    shouldThrow<PostNotFoundException> {
                        commentService.createComment(
                            9999L,
                            CommentRequestDto(
                                content = "댓글 내용",
                                userBy = "댓글 작성자",
                            ),
                        )
                    }
                }
            }

        }
        given("댓글 변경") {
            val savedPost = postRepository.save(
                Post(title = "제목", content = "내용", createdBy = "작성자"),
            )
            val savedComment = commentRepository.save(
                Comment(
                    content = "댓글 내용",
                    createdBy = "댓글 작성자",
                    post = savedPost,
                ),
            )
            When("정상적인 댓글 변경 요청 이면") {
                val updatedCommentId = commentService.updateComment(
                    savedComment.id,
                    CommentRequestDto(
                        content = "수정된 댓글 내용",
                        userBy = "댓글 작성자",
                    ),
                )
                Then("변경된 댓글을 확인 한다") {
                    updatedCommentId shouldBe savedComment.id
                    val updatedComment: Comment? = commentRepository.findByIdOrNull(updatedCommentId)
                    updatedComment shouldNotBe null
                    updatedComment!!.content shouldBe "수정된 댓글 내용"
                }
            }
            When("댓글이 없는 변경 요청이 오면") {
                then("댓글을 찾을수 없다는 에러가 발생 한다") {
                    shouldThrow<CommentNotFoundException> {
                        commentService.updateComment(
                            9999L,
                            CommentRequestDto(
                                content = "수정된 댓글 내용",
                                userBy = "댓글 작성자",
                            ),
                        )
                    }
                }
            }
            When("댓글 변경 요청 사용자가 댓글 생성자가 아니면") {
                then("댓글을 변경할 수 없다는 에러를 발생 시킨다") {
                    shouldThrow<CommentNotUpdatableException> {
                        commentService.updateComment(
                            savedComment.id,
                            CommentRequestDto(
                                content = "수정된 댓글 내용",
                                userBy = "다른 사용자",
                            ),
                        )
                    }
                }
            }
        }
        given("댓글 삭제") {
            val savedPost = postRepository.save(
                Post(title = "제목", content = "내용", createdBy = "작성자"),
            )
            val savedComment = commentRepository.save(
                Comment(
                    content = "댓글 내용",
                    createdBy = "댓글 작성자",
                    post = savedPost,
                ),
            )
            When("댓글이 없는 삭제 요청 이면") {
                Then("댓글을 찾을 수 없다는 에러를 발생 시킨다") {
                    shouldThrow<CommentNotFoundException> {
                        commentService.deleteComment(999L, "댓글 작성자")
                    }
                }
            }
            When("댓글 삭제 요청 사용자가 댓글 생성자가 아니면") {
                Then("댓글을 삭제할 수 없다는 에러를 발생 시킨다") {
                    shouldThrow<CommentNotDeletableException> {
                        commentService.deleteComment(savedComment.id, "다른 사용자")
                    }
                }
            }
            When("정상적인 댓글 삭제 요청 이면") {
                val deletedCommentId = commentService.deleteComment(savedComment.id, "댓글 작성자")
                Then("댓글이 삭제된 것을 확인 한다") {
                    deletedCommentId shouldBe savedComment.id
                    commentRepository.findByIdOrNull(deletedCommentId) shouldBe null
                }
            }
        }
    },
)
