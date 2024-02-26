package com.fastcampus.fcboard.service

import com.fastcampus.fcboard.domain.Comment
import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.domain.Tag
import com.fastcampus.fcboard.dto.PostRequestDto
import com.fastcampus.fcboard.dto.PostSearchDto
import com.fastcampus.fcboard.exception.PostNotDeletableException
import com.fastcampus.fcboard.exception.PostNotFoundException
import com.fastcampus.fcboard.exception.PostNotUpdatableException
import com.fastcampus.fcboard.repository.CommentRepository
import com.fastcampus.fcboard.repository.PostRepository
import com.fastcampus.fcboard.repository.TagRepository
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.common.ExperimentalKotest
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.comparables.shouldBeGreaterThan
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.domain.PageRequest
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
    private val commentRepository: CommentRepository,
    private val tagRepository: TagRepository
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
                    post shouldNotBe null
                    post.id shouldBeGreaterThan 0L
                    post.title shouldBe "제목"
                    post.content shouldBe "내용"
                    post.createdBy shouldBe "작성자"
                }
            }
            When("태그가 추가 되면") {
                val post =
                    postService.createPost(
                        PostRequestDto(
                            title = "제목",
                            content = "내용",
                            userBy = "작성자",
                            tags = listOf("태그1", "태그2"),
                        ),
                    )
                then("추가된 태그를 확인 한다") {
                    val tags = tagRepository.findByPostId(post.id)
                    tags.size shouldBe 2
                    tags[0].name shouldBe "태그1"
                    tags[1].name shouldBe "태그2"
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
                        tags = listOf("태그1", "태그2"),
                    ),
                )
            `when`("정상적인 게시글 변경 요청 이면") {
                val postResponseDto =
                    postService.updatePost(
                        post.id,
                        PostRequestDto(
                            title = "수정된 제목",
                            content = "수정된 내용",
                            userBy = "작성자",
                        ),
                    )
                then("변경된 게시글을 확인 한다") {
                    postResponseDto shouldNotBe null
                    postResponseDto.id shouldBe post.id
                    postResponseDto.title shouldBe "수정된 제목"
                    postResponseDto.content shouldBe "수정된 내용"
                    postResponseDto.createdBy shouldBe "작성자"
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
            When("태그가 변경되면") {
                val updatedPost = postService.updatePost(
                    post.id,
                    PostRequestDto(
                        title = "수정된 제목",
                        content = "수정된 내용",
                        userBy = "작성자",
                        tags = listOf("태그1", "태그2", "태그3"),
                    ),
                )
                then("변경된 태그를 확인 한다") {
                    val tags = tagRepository.findByPostId(updatedPost.id)
                    tags.size shouldBe 3
                    tags[0].name shouldBe "태그1"
                    tags[1].name shouldBe "태그2"
                    tags[2].name shouldBe "태그3"
                }
                then("태그 순서가 변경되면") {
                    val updatedPost = postService.updatePost(
                        post.id,
                        PostRequestDto(
                            title = "수정된 제목",
                            content = "수정된 내용",
                            userBy = "작성자",
                            tags = listOf("태그3", "태그2", "태그1"),
                        ),
                    )
                    val tags = tagRepository.findByPostId(updatedPost.id)
                    tags.size shouldBe 3
                    tags[0].name shouldBe "태그3"
                    tags[1].name shouldBe "태그2"
                    tags[2].name shouldBe "태그1"
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
            tagRepository.saveAll(
                listOf(
                    Tag(name = "태그1", post = savedPost, createdBy = "작성자"),
                    Tag(name = "태그2", post = savedPost, createdBy = "작성자"),
                    Tag(name = "태그3", post = savedPost, createdBy = "작성자"),
                ),
            )
            When("게시글이 정상 조회 되면") {
                val postResDto = postService.getPost(savedPost.id)
                Then("조회된 게시글을 확인 한다") {
                    postResDto.id shouldBe savedPost.id
                    postResDto.title shouldBe "제목"
                    postResDto.content shouldBe "내용"
                    postResDto.createdBy shouldBe "작성자"
                }
                Then("조회된 게시글의 태그를 확인 한다") {
                    postResDto.tags.size shouldBe 3
                    postResDto.tags[0] shouldBe "태그1"
                    postResDto.tags[1] shouldBe "태그2"
                    postResDto.tags[2] shouldBe "태그3"
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
                    val postResDto = postService.getPost(savedPost.id)
                    postResDto.comments.size shouldBe 1
                    postResDto.comments[0].id shouldBe comment1.id
                    postResDto.comments[0].content shouldBe "댓글-1"
                    postResDto.comments[0].createdBy shouldBe "댓글작성자"
                }
            }
        }
        given("게시글 목록 조회") {
            postRepository.saveAll(
                listOf(
                    Post(title = "title1", content = "content1", createdBy = "harris1", tags = listOf("tag1", "tag2")),
                    Post(title = "title12", content = "content1", createdBy = "harris1", tags = listOf("tag1", "tag2")),
                    Post(title = "title13", content = "content1", createdBy = "harris1", tags = listOf("tag1", "tag2")),
                    Post(title = "title14", content = "content1", createdBy = "harris1", tags = listOf("tag1", "tag2")),
                    Post(title = "title15", content = "content1", createdBy = "harris1", tags = listOf("tag1", "tag2")),
                    Post(title = "title6", content = "content1", createdBy = "harris2", tags = listOf("tag1", "tag5")),
                    Post(title = "title7", content = "content1", createdBy = "harris2", tags = listOf("tag1", "tag5")),
                    Post(title = "title8", content = "content1", createdBy = "harris2", tags = listOf("tag1", "tag5")),
                    Post(title = "title9", content = "content1", createdBy = "harris2", tags = listOf("tag1", "tag5")),
                    Post(title = "title10", content = "content1", createdBy = "harris2", tags = listOf("tag1", "tag5")),
                ),
            )
            When("정상 조회") {
                val postPage = postService.getPosts(PageRequest.of(0, 5), PostSearchDto())
                Then("게시글 페이지를 반환 한다") {
                    postPage.number shouldBe 0
                    postPage.size shouldBe 5
                    postPage.content.size shouldBe 5
                    postPage.content[0].title shouldBe "title10"
                    postPage.content[0].createdBy shouldBe "harris2"
                    postPage.content.forEach {
                        it.firstTag shouldBe "tag1"
                    }
                }
            }
            When("타이틀로 검색") {
                val postPage = postService.getPosts(PageRequest.of(0, 5), PostSearchDto(title = "title1"))
                Then("타이틀에 해당하는 게시글 페이지를 반환 한다") {
                    postPage.number shouldBe 0
                    postPage.size shouldBe 5
                    postPage.content.size shouldBe 5
                    postPage.content[0].title shouldBe "title10"
                    postPage.content[0].createdBy shouldBe "harris2"
                }
            }
            When("작성자로 검색") {
                val postPage = postService.getPosts(PageRequest.of(0, 5), PostSearchDto(createdBy = "harris1"))
                Then("게시글 페이지를 확인 한다") {
                    postPage.number shouldBe 0
                    postPage.size shouldBe 5
                    postPage.content.size shouldBe 5
                    postPage.content[0].title shouldBe "title15"
                    postPage.content[0].createdBy shouldBe "harris1"
                }
            }
            When("태그로 검색") {
                val postPage = postService.getPosts(PageRequest.of(0, 5), PostSearchDto(tag = "tag5"))
                Then("게시글 페이지를 확인 한다") {
                    postPage.number shouldBe 0
                    postPage.size shouldBe 5
                    postPage.content.size shouldBe 5
                    postPage.content[0].title shouldBe "title10"
                    postPage.content[1].title shouldBe "title9"
                    postPage.content[2].title shouldBe "title8"
                    postPage.content[3].title shouldBe "title7"
                    postPage.content[4].title shouldBe "title6"
                }
            }
        }
    },
)
