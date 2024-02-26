package com.fastcampus.fcboard

import com.fasterxml.jackson.databind.ObjectMapper
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.context.annotation.Import
import org.springframework.restdocs.RestDocumentationContextProvider
import org.springframework.restdocs.RestDocumentationExtension
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation
import org.springframework.restdocs.mockmvc.RestDocumentationResultHandler
import org.springframework.restdocs.payload.FieldDescriptor
import org.springframework.restdocs.payload.JsonFieldType
import org.springframework.restdocs.payload.PayloadDocumentation
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.springframework.test.web.servlet.setup.DefaultMockMvcBuilder
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext
import org.springframework.web.filter.CharacterEncodingFilter

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard
 * fileName    : RestDocsSupport
 * author      : limju
 * date        : 2024-02-23
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-23    limju       최초 생성
 *
 * </pre>
 */

@Disabled
// @WebMvcTest
@AutoConfigureMockMvc
@ExtendWith(RestDocumentationExtension::class)
// 테스트에서 별도로 구성한 config를 로딩함.
@Import(RestDocsConfig::class)
abstract class AbstractRestDocsSupport {
    @Autowired
    lateinit var objectMapper: ObjectMapper

    @Autowired
    lateinit var restDoc: RestDocumentationResultHandler

    lateinit var mockMvc: MockMvc

    /**
     * response body의 한글이 깨지는 문제를 처리하기 위해서 encoding 필터를 적용함.
     * @param webApplicationContext
     * @param restDocumentationContextProvider
     */
    @BeforeEach
    fun setup(
        webApplicationContext: WebApplicationContext?,
        restDocumentationContextProvider: RestDocumentationContextProvider?
    ) {
        this.mockMvc =
            MockMvcBuilders.webAppContextSetup(webApplicationContext!!)
                .apply<DefaultMockMvcBuilder>(
                    MockMvcRestDocumentation.documentationConfiguration(
                        restDocumentationContextProvider,
                    ),
                )
                .alwaysDo<DefaultMockMvcBuilder>(MockMvcResultHandlers.print()) // 이건 왜하는지 모르겠음.
                // 재정의한 핸들러를 적용함. 적용하면 일반 document에도 적용됨. 일반 document로 선언되면 그부분도 같이 생성됨에 유의해야 함.
                .alwaysDo<DefaultMockMvcBuilder>(restDoc)
                .addFilters<DefaultMockMvcBuilder>(CharacterEncodingFilter("UTF-8", true)) // 한글깨짐 방지 처리
                .build()
    }

    /**
     * 공통 결과 모델을 반환함.
     * - subsectionWithPath을 이용하면 하위 항목에 대한 정의를 하지 않아도됨.
     * - 하위 항목에 대한 정의가 불명확한 경우에 활용할 수 있음.
     * @return
     */
    protected fun responseCommon(): Array<FieldDescriptor> {
        return arrayOf(
            PayloadDocumentation.fieldWithPath("resultCode").type(JsonFieldType.NUMBER).description("결과코드"),
            PayloadDocumentation.fieldWithPath("resultMsg").type(JsonFieldType.STRING)
                .description(
                    "결과메세지",
                ),
            // subsectionWithPath("resultData").type(JsonFieldType.OBJECT).description("결과데이터").optional()
            PayloadDocumentation.fieldWithPath("resultData").type(JsonFieldType.OBJECT).description("결과데이터"),
        )
    }
}
