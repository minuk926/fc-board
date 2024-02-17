package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.CommentDto
import com.fastcampus.fcboard.exception.CommentNotFoundException
import com.fastcampus.fcboard.exception.CommentNotUpdatedException
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
 * packageName : com.fastcampus.fcboard.service
 * fileName    : CommentServiceTest
 * author      : minuk
 * date        : 2/17/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/17/24   minuk       최초 생성
 *
 * </pre>
 */
@SpringBootTest
class CommentServiceTest(
    private val commentService: CommentService,
    private val commentRepository: CommentRepository,
    private val postRepository: PostRepository
) : BehaviorSpec(
    {
        given("댓글 생성시") {
            val saved: Post = postRepository.save(Post(title = "title", content = "contents", createdBy = "user"))
            `when`("게시글의 댓글이 정상적으로 생성 된다") {
                val commentId: Long = commentService.createComment(saved.id, CommentDto("댓글 내용", "minuk"))

                then("정상 생성된 댓글을 확인 한다") {
                    commentId shouldBeGreaterThan 0L
                    val comment = commentRepository.findByIdOrNull(commentId)
                    comment shouldNotBe null
                    comment?.content shouldBe "댓글 내용"
                    comment?.createdBy shouldBe "minuk"
                }
            }
            When("게시글이 존재하지 않으면") {
                Then("게시글이 존재하지 않는다는 예외가 발생 한다") {
                    shouldThrow<PostNotFoundException> {
                        commentService.createComment(9999L, CommentDto("댓글 내용", "minuk"))
                    }
                }
            }
        }
        given("댓글 변경시") {
            val saved: Post = postRepository.save(Post(title = "title", content = "contents", createdBy = "user"))
            val savedCommentId: Long = commentService.createComment(saved.id, CommentDto("댓글 내용", "minuk"))

            When("댓글 변경이 정상적으로 입력되면") {
                val commentId = commentService.updateComment(savedCommentId, CommentDto("변경된 댓글 내용", "minuk"))
                Then("댓글이 정상적으로 변경된다") {
                    val comment = commentRepository.findByIdOrNull(commentId)
                    comment shouldNotBe null
                    comment?.content shouldBe "변경된 댓글 내용"
                }
            }
            When("존재하지 않는 댓글 변경 요청이면") {
                Then("댓글이 존재하지 않는다는 예외가 발생 한다") {
                    shouldThrow<CommentNotFoundException> {
                        commentService.updateComment(9999L, CommentDto("댓글 내용", "minuk"))
                    }
                }
            }
            When("댓글의 작성자와 변경자가 다르면") {
                Then("댓글이 변경되지 않는다는 예외가 발생 한다") {
                    shouldThrow<CommentNotUpdatedException> {
                        commentService.updateComment(savedCommentId, CommentDto("변경된 댓글 내용", "user"))
                    }
                }
            }
        }
        given("댓글 삭제시") {
            val saved: Post = postRepository.save(Post(title = "title", content = "contents", createdBy = "user"))
            val savedCommentId: Long = commentService.createComment(saved.id, CommentDto("댓글 내용", "minuk"))
            When("댓글의 작성자와 삭제자가 다르면") {
                Then("댓글이 변경되지 않는다는 예외가 발생 한다") {
                    shouldThrow<CommentNotUpdatedException> {
                        commentService.deleteComment(savedCommentId, "user1111")
                    }
                }
            }
            When("댓글 삭제가 정상적으로 요청되면") {
                val commentId = commentService.deleteComment(savedCommentId, "minuk")
                Then("댓글이 정상적으로 삭제 된다") {
                    commentId shouldBe savedCommentId
                    commentRepository.findByIdOrNull(commentId) shouldBe null
                }
            }
        }
    },
)
