package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.AbstractRestDocsSupport
import com.fastcampus.fcboard.domain.Post
import com.fastcampus.fcboard.dto.PostRequestDto
import com.fastcampus.fcboard.repository.PostRepository
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
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

@SpringBootTest
class PostControllerRestdocTest(
    @Autowired private val postRepository: PostRepository
) : AbstractRestDocsSupport() {
    @Test
    @DisplayName("게시글 상세 조회")
    fun getPost() {
        // given
        val post =
            postRepository.save(
                Post(
                    title = "제목",
                    content = "내용",
                    createdBy = "작성자",
                    tags = listOf("태그1", "태그2"),
                ),
            )

        // when
        val resultActions =
            this.mockMvc.perform(
                RestDocumentationRequestBuilders
                    .get("/posts/{id}", post.id).accept(MediaType.APPLICATION_JSON),
            )

        // then
        resultActions.andExpect(status().isOk)
            .andDo(MockMvcResultHandlers.print())
            .andDocument(
                pathParameters(
                    parameterWithName("id").description("게시글 id"),
                ),
                responseFields(
                    fieldWithPath("id").type(JsonFieldType.NUMBER).description("게시글 id"),
                    fieldWithPath("title").type(JsonFieldType.STRING).description("게시글 제목"),
                    fieldWithPath("content").type(JsonFieldType.STRING).description("게시글 내용"),
                    fieldWithPath("createdBy").type(JsonFieldType.STRING).description("게시글 작성자"),
                    fieldWithPath("createdAt").type(JsonFieldType.STRING).description("게시글 작성일"),
                    fieldWithPath("likeCount").type(JsonFieldType.NUMBER).description("좋아요 갯수"),
                    fieldWithPath("comments").type(JsonFieldType.ARRAY).description("댓글 목록"),
                    fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그 목록"),
                ),
            )
    }

    @Test
    @DisplayName("게시글 생성")
    fun createPost() {
        // given
        val postRequestDto =
            PostRequestDto(
                title = "제목",
                content = "내용",
                userBy = "작성자",
                tags = listOf("태그1", "태그2"),
            )
        val request = objectMapper.writeValueAsString(postRequestDto)

        // when
        val resultActions =
            this.mockMvc.perform(
                // MockMvcBuilders.post("/posts")
                RestDocumentationRequestBuilders.post("/posts")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(request),
            )

        // then
        resultActions.andExpect(MockMvcResultMatchers.status().isOk)
            .andDo(MockMvcResultHandlers.print())
            .andDocument(
                requestFields(
                    fieldWithPath("title").type(JsonFieldType.STRING).description("게시글 제목"),
                    fieldWithPath("content").type(JsonFieldType.STRING).description("게시글 내용"),
                    fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그 목록"),
                    fieldWithPath("userBy").type(JsonFieldType.STRING).description("게시글 작성자"),
                ),
                responseFields(
                    fieldWithPath("id").type(JsonFieldType.NUMBER).description("게시글 id"),
                    fieldWithPath("title").type(JsonFieldType.STRING).description("게시글 제목"),
                    fieldWithPath("content").type(JsonFieldType.STRING).description("게시글 내용"),
                    fieldWithPath("createdBy").type(JsonFieldType.STRING).description("게시글 작성자"),
                    fieldWithPath("createdAt").type(JsonFieldType.STRING).description("게시글 작성일"),
                    fieldWithPath("likeCount").type(JsonFieldType.NUMBER).description("좋아요 갯수"),
                    fieldWithPath("comments").type(JsonFieldType.ARRAY).description("댓글 목록"),
                    fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그 목록"),
                ),
            )
    }
}

fun ResultActions.andDocument(
    //identifier: String,
    vararg snippets: Snippet
): ResultActions {
    return andDo(document("{class-name}/{method-name}", *snippets))
}
