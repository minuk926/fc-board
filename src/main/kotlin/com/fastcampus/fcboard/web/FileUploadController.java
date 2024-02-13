package com.fastcampus.fcboard.web;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileUploadController {

    public static final Path path = Paths.get(System.getProperty("user.home"), ".upload");

    @PostMapping("/qr/file/upload")
    public String upload(@RequestParam("uploadFiles") List<MultipartFile> multipartFile) {
        //log.info("upload");
       // File targetFile = new File(path.resolve(multipartFile.getOriginalFilename()).toString());
        File targetFile = new File(path.resolve(multipartFile.get(0).getOriginalFilename()).toString());
//        try {
//            InputStream fileStream = multipartFile.getInputStream();
//            FileUtils.copyInputStreamToFile(fileStream, targetFile);
//        } catch (IOException e) {
//            FileUtils.deleteQuietly(targetFile);
//            log.error("Failed to upload ", e);
//        }

        System.out.println("~~~");

        return "redirect:/form";
    }

}
