package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.RestDocsSupport
import com.fastcampus.fcboard.dto.PostRequestDto
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders
import org.springframework.restdocs.payload.JsonFieldType
import org.springframework.restdocs.payload.PayloadDocumentation.*
import org.springframework.restdocs.request.RequestDocumentation.parameterWithName
import org.springframework.restdocs.request.RequestDocumentation.pathParameters
import org.springframework.restdocs.snippet.Snippet
import org.springframework.test.web.servlet.ResultActions
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

class PostControllerRestdocTest(
    @Autowired private val postController: PostController,
) : RestDocsSupport() {

    @Test
    @DisplayName("게시글 상세 조회")
    fun getPost() {
        // given
        val id: Long = postController.createPost(
            PostRequestDto(
                title = "제목",
                content = "내용",
                userBy = "작성자",
            ),
        )

        // when
        val resultActions = this.mockMvc.perform(
            RestDocumentationRequestBuilders
                .get("/posts/{id}", id).accept(MediaType.APPLICATION_JSON),
        )

        // then
        resultActions.andExpect(status().isOk)
            .andDo(MockMvcResultHandlers.print())
            .andDocument(
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
                    fieldWithPath("comments").description("댓글 목록"),
                ),
            )
    }


    @Test
    @DisplayName("게시글 생성2")
    fun createPost2() {
        // given
        val postRequestDto = PostRequestDto(
            title = "제목",
            content = "내용",
            userBy = "작성자",
        )
        val request = objectMapper.writeValueAsString(postRequestDto)
        //val request = objectMapper.convertValue(postRequestDto, String::class.java)

        // when
        val resultActions = this.mockMvc.perform(
            //MockMvcBuilders.post("/posts")
            RestDocumentationRequestBuilders.post("/posts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(request),
        )

        //then
        resultActions.andExpect(MockMvcResultMatchers.status().isOk)
            .andDo(MockMvcResultHandlers.print())
            .andDo(
                document(
                    "post",
                    requestFields(
                        //listOf(
                        fieldWithPath("title").type(JsonFieldType.STRING).description("게시글 제목"),
                        fieldWithPath("content").type(JsonFieldType.STRING).description("게시글 내용"),
                        fieldWithPath("userBy").type(JsonFieldType.STRING).description("게시글 작성자"),
                        //),
                    ),
                    responseFields(
                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("게시글 id"),
                    ),
                ),
            )
    }
}

fun ResultActions.andDocument(
    identifier: String,
    vararg snippets: Snippet
): ResultActions {
    return andDo(document(identifier, *snippets))
}
