package com.fastcampus.fcboard.repository

import com.fastcampus.fcboard.domain.User
import org.springframework.data.jpa.repository.JpaRepository

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.repository
 * fileName    : UserRepository
 * author      : limju
 * date        : 2024-02-21
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-21    limju       최초 생성
 *
 * </pre>
 */
interface UserRepository : JpaRepository<User, Long>

