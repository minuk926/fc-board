package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.RestControllerTest
import com.fastcampus.fcboard.dto.PostDto
import com.fasterxml.jackson.databind.ObjectMapper
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
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

class PostControllerRestdocTest(
    @Autowired private val postController: PostController
) : RestControllerTest() {
    private val mapper: ObjectMapper = ObjectMapper()

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
    fun defaultGet() {
        this.mockMvc.perform(MockMvcRequestBuilders.get("/post/{id}", 1))
            //.andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.status().isNotFound)
    }

    @Test
    fun defaultPost() {
        val request = mapper.writeValueAsString(
            PostDto(
                title = "title",
                content = "content",
                userBy = "limju",
            ),
        )
        this.mockMvc.perform(
            MockMvcRequestBuilders.post("/posts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(request),
            //).andExpect(MockMvcResultMatchers.status().isCreated)
        ).andExpect(MockMvcResultMatchers.status().isOk)
            .andDo(MockMvcResultHandlers.print())
//            .andDo(
//                document(
//                    "post",
//                    requestFields(
//                        fieldWithPath("title").description("게시글 제목"),
//                        fieldWithPath("content").description("게시글 내용"),
//                        fieldWithPath("userBy").description("게시글 작성자"),
//                    ),
//                    responseFields(
//                        fieldWithPath("id").description("게시글 id"),
//                        fieldWithPath("title").description("게시글 제목"),
//                        fieldWithPath("content").description("게시글 내용"),
//                        fieldWithPath("createdBy").description("게시글 작성자"),
//                        fieldWithPath("createdAt").description("게시글 작성일"),
//                        fieldWithPath("updatedBy").description("게시글 최종 변경자"),
//                        fieldWithPath("updatedAt").description("게시글 최종 변경일"),
//                        fieldWithPath("comments").description("댓글 목록"),
//                    ),
//                ),
//            )
    }
}
