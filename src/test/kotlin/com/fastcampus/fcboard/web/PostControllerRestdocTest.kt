package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.RestControllerTest
import com.fastcampus.fcboard.dto.PostDto
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders
import org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath
import org.springframework.restdocs.payload.PayloadDocumentation.responseFields
import org.springframework.restdocs.request.RequestDocumentation.parameterWithName
import org.springframework.restdocs.request.RequestDocumentation.pathParameters
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

class PostControllerRestdocTest @Autowired constructor(
    private val postController: PostController
) : RestControllerTest() {
    @Test
    @DisplayName("게시글 상세 조회")
    fun getPost() {
        val id: Long = postController.createPost(
            PostDto(
                title = "title",
                content = "content",
                userBy = "limju",
            ),
        )

        this.mockMvc.perform(
            RestDocumentationRequestBuilders
                .get("/posts/{id}", id).accept(MediaType.APPLICATION_JSON),
        )
            .andExpect(status().isOk)
            .andDo(MockMvcResultHandlers.print())
            .andDo(
                document(
                    "post",
                    pathParameters(
                        parameterWithName("id").description("게시글 id"),
                    ),
                    responseFields(
                        fieldWithPath("id").description("게시글 id"),
                        fieldWithPath("title").description("게시글 제목"),
                        fieldWithPath("content").description("게시글 내용"),
                        fieldWithPath("createdBy").description("게시글 작성자"),
                        fieldWithPath("createdAt").description("게시글 작성일"),
                        fieldWithPath("updatedBy").description("게시글 최종 변경자"),
                        fieldWithPath("updatedAt").description("게시글 최종 변경일"),
                        fieldWithPath("comments").description("댓글 목록"),
                    ),
                ),
            )
    }

    @Test
    @DisplayName("게시글 생성")
    fun createPost() {
        val postDto = PostDto(
            title = "title",
            content = "content",
            userBy = "limju",
        )

        this.mockMvc.perform(
            RestDocumentationRequestBuilders
                .post("/posts").contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(postDto)),
        )
            .andExpect(status().isOk)
            .andDo(MockMvcResultHandlers.print())
            .andDo(
                document(
                    "post",
                    responseFields(
                        fieldWithPath("id").description("게시글 id"),
                    ),
                ),
            )
    }

    /*
        @Test
        fun `어떠한 테스트 코드`() {

            mockMvc.post("/posts") {
                content = objectMapper.writeValueAsBytes(somethingRequest) // body값에 넘겨줄 값
                contentType = MediaType.APPLICATION_JSON  // 한글, 특수문자 깨짐 방지
            }.andExpect {
                status { isOk }
                content { json(objectMapper.writeValueAsString(somethingResponse) }  // Response Body
            }.andDo {
                    document(
                        "index",
                        PayloadDocumentation.requestFields(
                            PayloadDocumentation.fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                            PayloadDocumentation.fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호")
                        ),
                        PayloadDocumentation.responseFields(
                            PayloadDocumentation.fieldWithPath("message").type(JsonFieldType.STRING).description("메시지"),
                            PayloadDocumentation.fieldWithPath("body").type(JsonFieldType.STRING).description("토큰")
                        )
                    )

            }
        }
    */
}
