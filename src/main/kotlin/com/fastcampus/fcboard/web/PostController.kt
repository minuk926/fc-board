// package com.fastcampus.fcboard.web
//
// import com.fastcampus.fcboard.model.PostCreateRequest
// import com.fastcampus.fcboard.model.PostRequest
// import com.fastcampus.fcboard.service.IPostService
// import org.springframework.http.ResponseEntity
// import org.springframework.transaction.annotation.Transactional
// import org.springframework.web.bind.annotation.DeleteMapping
// import org.springframework.web.bind.annotation.GetMapping
// import org.springframework.web.bind.annotation.PathVariable
// import org.springframework.web.bind.annotation.PostMapping
// import org.springframework.web.bind.annotation.PutMapping
// import org.springframework.web.bind.annotation.RequestBody
// import org.springframework.web.bind.annotation.RequestMapping
// import org.springframework.web.bind.annotation.RequestParam
// import org.springframework.web.bind.annotation.RestController
//
// @RestController
// @RequestMapping("/posts")
// class PostController(
//    val postService: IPostService,
// ) {
//    @GetMapping
//    @Transactional(readOnly = true)
//    fun getAll() =
//        ResponseEntity.ok(postService.findAll())
//
//    @GetMapping("/{id}")
//    @Transactional(readOnly = true)
//    fun get(
//        @PathVariable id: Long,
//    ) =
//        ResponseEntity.ok(postService.findById(id))
//
//    @PostMapping
//    @Transactional
//    fun createPost(
//        @RequestBody postCreateRequest: PostCreateRequest,
//    ): Long =
//        1L
//
//    @PutMapping("/{id}")
//    @Transactional
//    fun updatePost(
//        @PathVariable id: Long,
//        @RequestBody postRequest: PostRequest,
//    ): Long =
//        id
//
//    @DeleteMapping("/{id}")
//    @Transactional
//    fun deletePost(
//        @PathVariable id: Long,
//        @RequestParam createdBy: String,
//    ): Long =
//        id
// }
