package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Comment
import org.springframework.data.jpa.repository.JpaRepository

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.repository
 * fileName    : CommentRepository
 * author      : limju
 * date        : 2024-02-22
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-22    limju       최초 생성
 *
 * </pre>
 */
interface CommentRepository : JpaRepository<Comment, Long>
