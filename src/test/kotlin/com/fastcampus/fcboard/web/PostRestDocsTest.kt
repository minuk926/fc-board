//package com.fastcampus.fcboard.web
//
//import com.fastcampus.fcboard.RestControllerTest
//import com.fastcampus.fcboard.dto.PostRequestDto
//import org.junit.jupiter.api.DisplayName
//import org.junit.jupiter.api.Test
//import java.awt.PageAttributes
//
///**
// * <pre>
// * description :
// *
// * packageName : com.fastcampus.fcboard.web
// * fileName    : PostRestDocsTest
// * author      : limju
// * date        : 2024-02-22
// * ======================================================================
// * 변경일         변경자        변경 내용
// * ----------------------------------------------------------------------
// * 2024-02-22    limju       최초 생성
// *
// * </pre>
// */
//class PostRestDocsTest(
//    private val postController: PostController,
//): RestControllerTest(){
//
//    @Test
//    @DisplayName("게시글 생성")
//    fun createPost() {
//        // given
//        val postRequestDto = PostRequestDto(
//            title = "제목",
//            content = "내용",
//            userBy = "작성자",
//        )
//
//        // when
//        val resultActions = mockMvc.perform(
//            post("/posts")
//                .contentType(PageAttributes.MediaType.APPLICATION_JSON)
//                .content(objectMapper.writeValueAsString(postRequestDto))
//        )
//
//        // then
//        resultActions
//            .andExpect(status().isCreated)
//            .andDo(
//                document(
//                    "posts/create",
//                    requestFields(
//                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
//                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용"),
//                        fieldWithPath("userBy").type(JsonFieldType.STRING).description("작성자"),
//                    ),
//                    responseFields(
//                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("생성한 Post ID"),
//                    ),
//                )
//            )
//    }
//
//}
