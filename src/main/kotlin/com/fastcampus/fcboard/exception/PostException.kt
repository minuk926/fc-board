package com.fastcampus.fcboard.exception

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.exception
 * fileName    : PostException
 * author      : limju
 * date        : 2024-02-22
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-22    limju       최초 생성
 *
 * </pre>
 */
open class PostException(message: String) : RuntimeException(message)

class PostNotFoundException() : PostException("게시글을 찾을 수 없습니다.")
class PostNotUpdatableException() : PostException("게시글을 변경할 수 없습니다.")
class PostNotDeletableException() : PostException("게시글을 삭제할 수 없습니다.")
