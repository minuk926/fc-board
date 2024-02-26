package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.RestDocsConfig
import com.fastcampus.fcboard.dto.CommentRequestDto
import com.fastcampus.fcboard.dto.CommentResponseDto
import com.fastcampus.fcboard.dto.PostRequestDto
import com.fastcampus.fcboard.dto.PostResponseDto
import com.fasterxml.jackson.databind.ObjectMapper
import io.restassured.RestAssured.given
import io.restassured.builder.RequestSpecBuilder
import io.restassured.http.ContentType
import io.restassured.specification.RequestSpecification
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.context.annotation.Import
import org.springframework.http.HttpStatus
import org.springframework.restdocs.RestDocumentationExtension

@ExtendWith(RestDocumentationExtension::class)
@Import(RestDocsConfig::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CommentControllerAssuredTest {
    @LocalServerPort
    private var port: Int = 0

    protected lateinit var reqSpec: RequestSpecification

    @Autowired
    private val mapper = ObjectMapper()

    private lateinit var postResponseDto: PostResponseDto
    private lateinit var commentResponseDto: CommentResponseDto

    @BeforeEach
    fun setRequestSpec() {
        val reqBuilder = RequestSpecBuilder()
        reqBuilder.setContentType(ContentType.JSON)
        reqBuilder.setPort(port)
        reqSpec = reqBuilder.build()
        initPost()
    }

    @DisplayName("댓글 생성")
    @Test
    fun createComment() {
        initComment()

        given()
            .spec(reqSpec)
            .`when`()
            .get("/posts/{id}", postResponseDto.id)
            .then()
            .statusCode(200)
            .body("id", org.hamcrest.Matchers.equalTo(postResponseDto.id.toInt()))
            .body("title", org.hamcrest.Matchers.equalTo("게시글 제목"))
            .body("content", org.hamcrest.Matchers.equalTo("게시글 내용"))
            .body("createdBy", org.hamcrest.Matchers.equalTo("게시글 작성자"))
            .body("comments[0].id", org.hamcrest.Matchers.equalTo(commentResponseDto.id.toInt()))
            .body("comments[0].content", org.hamcrest.Matchers.equalTo("댓글 내용"))
            .body("comments[0].createdBy", org.hamcrest.Matchers.equalTo("댓글 작성자"))

        given()
            .spec(reqSpec)
            .`when`()
    }

    @Test
    @DisplayName("댓글 변경")
    fun updateComment() {
        initComment()

        val updateCommentRequestDto =
            CommentRequestDto(
                content = "변경된 댓글 내용",
                userBy = "댓글 작성자",
            )
        val commentId =
            given()
                .log().uri()
                .log().body()
                .spec(reqSpec)
                .body(mapper.writeValueAsString(updateCommentRequestDto))
                .`when`()
                .put("/comments/{commentId}", commentResponseDto.id)
                .then()
                .log().all()
                .statusCode(HttpStatus.OK.value())
                .body("id", org.hamcrest.Matchers.equalTo(postResponseDto.id.toInt()))
                .body("content", org.hamcrest.Matchers.equalTo("변경된 댓글 내용"))
                .body("createdBy", org.hamcrest.Matchers.equalTo("댓글 작성자"))
    }

    private fun initPost() {
        val postRequestDto =
            PostRequestDto(
                title = "게시글 제목",
                content = "게시글 내용",
                userBy = "게시글 작성자",
            )

        postResponseDto =
            given()
                .spec(reqSpec)
                .body(mapper.writeValueAsString(postRequestDto))
                .`when`()
                .post("/posts")
                .then()
                .statusCode(HttpStatus.OK.value())
                .extract()
                .`as`(PostResponseDto::class.java)
    }

    private fun initComment() {
        val commentRequestDto =
            CommentRequestDto(
                content = "댓글 내용",
                userBy = "댓글 작성자",
            )
        commentResponseDto =
            given()
                .log().uri()
                .log().body()
                .spec(reqSpec)
                .body(mapper.writeValueAsString(commentRequestDto))
                .`when`()
                .post("/posts/{id}/comments", postResponseDto.id)
                .then()
                .log().all()
                .statusCode(HttpStatus.OK.value())
                .body("id", org.hamcrest.Matchers.greaterThan(0))
                .body("content", org.hamcrest.Matchers.equalTo("댓글 내용"))
                .body("createdBy", org.hamcrest.Matchers.equalTo("댓글 작성자"))
                .extract()
                .`as`(CommentResponseDto::class.java)
    }
}
