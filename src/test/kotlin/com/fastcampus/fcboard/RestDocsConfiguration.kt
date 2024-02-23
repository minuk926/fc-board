package com.fastcampus.fcboard

import org.springframework.boot.test.context.TestConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation
import org.springframework.restdocs.mockmvc.RestDocumentationResultHandler
import org.springframework.restdocs.operation.preprocess.Preprocessors

@TestConfiguration
class RestDocsConfiguration {
    @Bean
    fun restDocumentationResultHandler(): RestDocumentationResultHandler {
        return MockMvcRestDocumentation.document(
            // 출력폴더와 method명을 자동화시킴.
            "{class-name}/{method-name}",
            Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
            Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
        )
    }
}
