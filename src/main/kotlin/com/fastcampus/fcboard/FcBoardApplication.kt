package com.fastcampus.fcboard

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@SpringBootApplication
@EnableJpaAuditing
class FcBoardApplication

fun main(args: Array<String>) {
    runApplication<FcBoardApplication>(*args)
}
