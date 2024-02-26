package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.Like
import org.springframework.data.jpa.repository.JpaRepository

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.repository
 * fileName    : LikeRepository
 * author      : minuk
 * date        : 2/27/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/27/24   minuk       최초 생성
 *
 * </pre>
 */
interface LikeRepository : JpaRepository<Like, Long>
