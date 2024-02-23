package com.fastcampus.fcboard.exception

/**
 * <pre>
 * description :
 *
 * packageName : com.fastcampus.fcboard.exception
 * fileName    : CommentException
 * author      : limju
 * date        : 2024-02-23
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2024-02-23    limju       최초 생성
 *
 * </pre>
 */
open class CommentException(message: String) : RuntimeException(message)

class CommentNotFoundException() : CommentException("댓글을 찾을 수 없습니다.")
class CommentNotUpdatableException() : CommentException("댓글을 변경할 수 없습니다.")
class CommentNotDeletableException() : CommentException("댓글을 삭제할 수 없습니다.")
