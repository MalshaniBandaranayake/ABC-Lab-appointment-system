package com.icbt.LabAppointment.Controller;

import com.icbt.LabAppointment.Entity.FileDocument;
import com.icbt.LabAppointment.Service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/files")
public class FileController {

    @Autowired
    private FileService fileService;


    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam("patientName") String patientName,
            @RequestParam("patientNIC") String patientNIC
    ) throws IOException {
        String fileId = fileService.uploadFile(file, patientName, patientNIC);

        return ResponseEntity.ok("File uploaded successfully. FileId: " + fileId);
    }

    @GetMapping("/all")
    public ResponseEntity<List<FileDocument>> getAllFiles() {
        List<FileDocument> allFiles = fileService.getAllFiles();

        if (!allFiles.isEmpty()) {
            return ResponseEntity.ok(allFiles);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/download/{fileId}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String fileId) {
        Optional<FileDocument> fileDocument = fileService.downloadFile(fileId);

        if (fileDocument.isPresent()) {
            FileDocument file = fileDocument.get();
            return ResponseEntity.ok()
                    .header("Content-Disposition", "attachment; filename=" + file.getFileName())
                    .body((file.getData()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/delete/{fileId}")
    public ResponseEntity<String> deleteFile(@PathVariable String fileId) {
        boolean deleted = fileService.deleteFile(fileId);


        if (deleted) {
            return ResponseEntity.ok("File deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping("/search/{patientNIC}")
    public ResponseEntity<List<FileDocument>> searchFilesByPatientNIC(@PathVariable String patientNIC) {
        List<FileDocument> matchingFiles = fileService.searchFilesByPatientNIC(patientNIC);

        if (!matchingFiles.isEmpty()) {
            return ResponseEntity.ok(matchingFiles);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{fileId}")
    public ResponseEntity<String> updateFile(
            @PathVariable String fileId,
            @RequestParam("file") MultipartFile file,
            @RequestParam("patientName") String patientName,
            @RequestParam("patientNIC") String patientNIC

    ) throws IOException {

        boolean updated = fileService.updateFile(fileId, file, patientName, patientNIC);

        if (updated) {
            return ResponseEntity.ok("File updated successfully");
        } else {

            return ResponseEntity.notFound().build();


        }
    }
}
