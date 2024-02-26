package com.fastcampus.fcboard.web

import com.fastcampus.fcboard.dto.TagRequestDto
import com.fastcampus.fcboard.dto.TagResponseDto
import com.fastcampus.fcboard.service.TagService
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.web
 * fileName    : TagController
 * author      : limju
 * date        : 2024-02-26
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-26    limju       최초 생성
 *
 * </pre>
 */
@RestController
class TagController(
    private val tagService: TagService
) {

    @PostMapping("/posts/{postId}/tags")
    fun createTag(@PathVariable postId: Long, @RequestBody tagRequestDto: TagRequestDto): TagResponseDto {
        return tagService.createTag(postId, tagRequestDto)
    }
}
