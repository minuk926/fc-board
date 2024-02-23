package com.fastcampus.fcboard

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard
 * fileName    : RestDocsConfiguration
 * author      : limju
 * date        : 2024-02-23
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-23    limju       최초 생성
 *
 * </pre>
 */
/*
@Configuration
class RestDocsConfiguration {
    @Bean
    fun write(): RestDocumentationResultHandler {
        return MockMvcRestDocumentation.document(
            "{class-name}/{method-name}",
            Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
            Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
        )
    }
}

@SpringBootTest(
    properties = [
        """ spring.config.location=classpath:/application.yml """,
        "spring.profiles.active=test",
    ],
    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestConstructor(autowireMode = TestConstructor.AutowireMode.ALL)
class SpringTestSupport {

    @Suppress("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    private lateinit var entityManager: EntityManager

//    protected val query: JPAQueryFactory by lazy { JPAQueryFactory(entityManager) }

    protected fun <T> save(entity: T): T {
        entityManager.persist(entity)
        flushAndClearPersistentContext()
        return entity
    }

    protected fun <T> saveAll(entities: Iterable<T>): Iterable<T> {
        for (entity in entities) {
            entityManager.persist(entity)
        }
        flushAndClearPersistentContext()
        return entities
    }

    private fun flushAndClearPersistentContext() {
        entityManager.flush()
        entityManager.clear()
    }
}


@AutoConfigureMockMvc
@Import(RestDocsConfiguration::class)
@ExtendWith(RestDocumentationExtension::class)
class SpringWebTestSupport : SpringTestSupport() {
    @LocalServerPort
    private var port: Int? = null

    @Autowired
    protected lateinit var objectMapper: ObjectMapper

    @Autowired
    protected lateinit var restdocs: RestDocsConfiguration

    @Suppress("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    protected lateinit var mockMvc: MockMvc

    @Autowired
    protected lateinit var write: RestDocumentationResultHandler

    @Autowired
    protected lateinit var resourceLoader: ResourceLoader

    protected val classpath = "classpath:"


    protected val apiVersion = "/v1"


    @BeforeEach
    fun setUp(context: WebApplicationContext, provider: RestDocumentationContextProvider) {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context)
            .apply<DefaultMockMvcBuilder>(MockMvcRestDocumentation.documentationConfiguration(provider))
            .addFilters<DefaultMockMvcBuilder>(CharacterEncodingFilter("UTF-8", true))
            .alwaysDo<DefaultMockMvcBuilder>(MockMvcResultHandlers.print())
            .alwaysDo<DefaultMockMvcBuilder>(restdocs.write())
            .build()

    }
}
*/
