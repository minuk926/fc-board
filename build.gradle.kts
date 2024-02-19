import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    // id("org.springframework.boot") version "2.7.14"
    id("org.springframework.boot") version "3.2.2"
    id("io.spring.dependency-management") version "1.1.4"
    id("org.jlleitschuh.gradle.ktlint") version "11.4.0"

    application
    kotlin("jvm") version "1.9.22"
    kotlin("plugin.spring") version "1.9.22"
    kotlin("plugin.jpa") version "1.9.22"
    kotlin("plugin.noarg") version "1.9.22"
    kotlin("kapt") version "1.9.22"

    id("org.asciidoctor.jvm.convert") version "3.3.2"
}

group = "com.fastcampus"
version = "0.0.1-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_17
}

application {
    mainClass = "com.fastcampus.fcboard.FcBoardApplication"
}

repositories {
    mavenCentral()
}

dependencies {
    val p6spyVersion = "1.9.1"
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")

    implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.1.0")

    implementation("com.querydsl:querydsl-jpa:5.0.0:jakarta")
    kapt("com.querydsl:querydsl-apt:5.0.0:jakarta")

    // runtimeOnly("org.mariadb.jdbc:mariadb-java-client")
    // mysql driver 추가
    runtimeOnly("mysql:mysql-connector-java:8.0.33")
    // runtimeOnly("com.mysql:mysql-connector-j:8.3.0")

    // p6spy ----------------------------------------------------------------
    // p6spy spring boot 2.X - 1.8.1, sprin boot 3.X - 1.9.1
    implementation("com.github.gavlyukovskiy:p6spy-spring-boot-starter:$p6spyVersion")
    // -----------------------------------------------------------------------
    runtimeOnly("org.springframework.boot:spring-boot-devtools")

    // h2 database
    runtimeOnly("com.h2database:h2")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("io.kotest:kotest-runner-junit5:5.6.2")
    testImplementation("io.kotest:kotest-assertions-core:5.6.2")
    testImplementation("io.kotest.extensions:kotest-extensions-spring:1.1.3")
    // mockk
    testImplementation("io.mockk:mockk:1.13.8")
}

tasks.withType<KotlinCompile> {
    // dependsOn("copyWebApp")
    kotlinOptions {
        // freeCompilerArgs += "-Xjsr305=strict"
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "17"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

// jar 생성시 plain jar와 일반 jar가 생성
// plain jar를 생성하지 않도록 한다
tasks.named<Jar>("jar") {
    enabled = false
}

allOpen {
    annotation("com.fastcampus.config.AllOpen")
}

//---------------------------------------------------------------------
// asciidoctor : https://shanepark.tistory.com/424
//---------------------------------------------------------------------
val asciidoctorExt: Configuration by configurations.creating
dependencies {
    asciidoctorExt("org.springframework.restdocs:spring-restdocs-asciidoctor")
    testImplementation("org.springframework.restdocs:spring-restdocs-mockmvc")
}

val snippetsDir by extra { file("build/generated-snippets") }
tasks {
    // Test 결과를 snippet Directory에 출력
    test {
        outputs.dir(snippetsDir)
    }
    asciidoctor {
        // test 가 성공해야만, 아래 Task 실행
        dependsOn(test)

        // 기존에 존재하는 Docs 삭제(문서 최신화를 위해)
        doFirst {
            delete(file("src/main/resources/static/docs"))
        }
        // snippet Directory 설정
        inputs.dir(snippetsDir)

        // Ascii Doc 파일 생성
        doLast {
            copy {
                from("build/docs/asciidoc")
                into("src/main/resources/static/docs")
                from(file(snippetsDir))
                into(file("src/main/resources/static/docs"))
            }
        }
    }
    build {
        // Ascii Doc 파일 생성이 성공해야만, Build 진행
        dependsOn(asciidoctor)
    }
    //bootJar {
    //    dependsOn(asciidoctor)
    //}
}
