package com.fastcampus.fcboard.dto

import org.springframework.web.bind.annotation.RequestParam

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.dto
 * fileName    : PostGetRequst
 * author      : minuk
 * date        : 2/11/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/11/24   minuk       최초 생성
 *
 * </pre>
 */
data class PostSearchRequst(
    @RequestParam val title: String,
    @RequestParam val createdBy: String
)
