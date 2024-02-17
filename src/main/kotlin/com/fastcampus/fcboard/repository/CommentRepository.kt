package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Comment
import org.springframework.data.jpa.repository.JpaRepository

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.repository
 * fileName    : CommentRepository
 * author      : minuk
 * date        : 2/17/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/17/24   minuk       최초 생성
 *
 * </pre>
 */
interface CommentRepository : JpaRepository<Comment, Long>
