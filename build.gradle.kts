import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    // id("org.springframework.boot") version "2.7.14"
    id("org.springframework.boot") version "3.2.2"
    id("io.spring.dependency-management") version "1.1.4"
    id("org.jlleitschuh.gradle.ktlint") version "11.4.0"

    id("com.github.node-gradle.node") version "7.0.1"

    application
    kotlin("jvm") version "1.9.22"
    kotlin("plugin.spring") version "1.9.22"
    kotlin("plugin.jpa") version "1.9.22"
    kotlin("plugin.noarg") version "1.9.22"
    kotlin("kapt") version "1.9.22"
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

    runtimeOnly("org.mariadb.jdbc:mariadb-java-client")

    // p6spy ----------------------------------------------------------------
    // p6spy spring boot 2.X - 1.8.1, sprin boot 3.X - 1.9.1
    implementation("com.github.gavlyukovskiy:p6spy-spring-boot-starter:$p6spyVersion")
    // -----------------------------------------------------------------------
    runtimeOnly("org.springframework.boot:spring-boot-devtools")

    // zxing qrcode
    implementation("com.google.zxing:javase:3.5.3")
    implementation("com.google.zxing:core:3.5.3")

    // webjars
    implementation("org.webjars:bootstrap:5.3.0")
    implementation("org.webjars:jquery:3.6.0")
    implementation("org.webjars:popper.js:1.16.1")

    // kotest
    testImplementation("io.kotest:kotest-assertions-core:5.6.2")
    testImplementation("io.kotest:kotest-runner-junit5:5.6.2")
    testImplementation("io.kotest:kotest-extensions-spring:1.1.3")
    testImplementation("io.mockk:mockk:1.13.8")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.junit.jupiter:junit-jupiter:5.8.2")
    testImplementation("org.assertj:assertj-core:3.21.0")
    testImplementation("org.mockito:mockito-core:3.12.4")
    testImplementation("org.hamcrest:hamcrest:2.2")
    testImplementation("org.webjars:bootstrap:5.3.0")
    testImplementation("org.webjars:jquery:3.6.0")
    testImplementation("org.webjars:popper.js:1.16.1")
    testImplementation("org.webjars:bootstrap:5.3.0")
    testImplementation("org.webjars:jquery:3.6.0")
    testImplementation("org.webjars:popper.js:1.16.1")
    testImplementation("org.webjars:bootstrap:5.3.0")
    testImplementation("org.webjars:jquery:3.6.0")
    testImplementation("org.webjars:popper.js:1.16.1")

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
