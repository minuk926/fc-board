//package com.fastcampus.fcboard.web
//
//import com.fastcampus.fcboard.dto.PostDto
//import com.fasterxml.jackson.databind.ObjectMapper
//import org.junit.jupiter.api.Test
//import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
//import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
//import org.springframework.http.MediaType
//import org.springframework.test.context.TestConstructor
//import org.springframework.test.web.servlet.MockMvc
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers
//
//@WebMvcTest(
//    controllers = [PostController::class],
//    excludeAutoConfiguration = [SecurityAutoConfiguration::class],
//)
//@TestConstructor(autowireMode = TestConstructor.AutowireMode.ALL)
//@AutoConfigureRestDocs
//class PostControllerRestdocTest2(
//    private val mockMvc: MockMvc,
//    private val mapper: ObjectMapper,
//) {
//    @Test
//    fun defaultGet() {
//        this.mockMvc.perform(MockMvcRequestBuilders.get("/post/{id}", 1))
//            .andExpect(MockMvcResultMatchers.status().isOk)
//    }
//
//    @Test
//    fun defaultPost() {
//        val request = mapper.writeValueAsString(
//            PostDto(
//                title = "title",
//                content = "content",
//                userBy = "limju",
//            ),
//        )
//        this.mockMvc.perform(
//            MockMvcRequestBuilders.post("/posts")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(request),
//        ).andExpect(MockMvcResultMatchers.status().isCreated)
//    }
//
////    @Test
////    @DisplayName("게시글 상세 조회")
////    fun getPost() {
////        val id: Long = postController.createPost(
////            PostDto(
////                title = "title",
////                content = "content",
////                userBy = "limju",
////            ),
////        )
////
////        this.mockMvc.perform(
////            RestDocumentationRequestBuilders
////                .get("/posts/{id}", id).accept(MediaType.APPLICATION_JSON),
////        )
////            .andExpect(status().isOk)
////            .andDo(MockMvcResultHandlers.print())
////            .andDo(
////                document(
////                    "post",
////                    pathParameters(
////                        parameterWithName("id").description("게시글 id"),
////                    ),
////                    responseFields(
////                        fieldWithPath("id").description("게시글 id"),
////                        fieldWithPath("title").description("게시글 제목"),
////                        fieldWithPath("content").description("게시글 내용"),
////                        fieldWithPath("createdBy").description("게시글 작성자"),
////                        fieldWithPath("createdAt").description("게시글 작성일"),
////                        fieldWithPath("updatedBy").description("게시글 최종 변경자"),
////                        fieldWithPath("updatedAt").description("게시글 최종 변경일"),
////                        fieldWithPath("comments").description("댓글 목록"),
////                    ),
////                ),
////            )
////    }
//}
