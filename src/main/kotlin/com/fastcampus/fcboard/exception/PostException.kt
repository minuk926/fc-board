package com.fastcampus.fcboard.exception

/**
 * <pre>
 * description :
 * packageName : com.fastcampus.fcboard.exception
 * fileName    : PostException
 * author      : minuk
 * date        : 2/12/24
 * ======================================================================
 * 변경일         변경자        변경 내용
 * ----------------------------------------------------------------------
 * 2/12/24   minuk       최초 생성
 *
 * </pre>
 */
open class PostException(message: String) : RuntimeException(message)

class PostNotFoundException() : PostException("게시글을 찾을 수 없습니다.")

class PostNotUpdatedException() : PostException("게시글을 변경할 수 없습니다.")

class PostNotDeleteException() : PostException("삭제할 수 없는 게시글 입니다.")
