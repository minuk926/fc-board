package com.fastcampus.fcboard.exception

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.exception
 * fileName    : CommentException
 * author      : minuk
 * date        : 2/18/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/18/24   minuk       최초 생성
 *
 * </pre>
 */
open class CommentException(message: String) : RuntimeException(message)

class CommentNotFoundException : CommentException("댓글을 찾을 수 없습니다.")

class CommentNotUpdatedException : CommentException("댓글을 변경할 수 없습니다.")
