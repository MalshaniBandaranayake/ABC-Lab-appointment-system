package com.icbt.LabAppointment.Service;


import com.icbt.LabAppointment.Entity.FileDocument;
import com.icbt.LabAppointment.Repo.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
    public class FileService {


        @Autowired
        private FileRepository fileRepository;

        public String uploadFile(MultipartFile file, String patientName, String patientNIC) throws IOException {
            // Extract file information
            String fileName = file.getOriginalFilename();
            String fileType = file.getContentType();
            byte[] data = file.getBytes();

            // Create FileDocument instance with patient information
            FileDocument fileDocument = new FileDocument();
            fileDocument.setFileName(fileName);
            fileDocument.setFileType(fileType);
            fileDocument.setData(data);
            fileDocument.setPatientName(patientName);
            fileDocument.setPatientNIC(patientNIC);

            // Save the file to the database
            FileDocument savedFile = fileRepository.save(fileDocument);

            return savedFile.get_id();  // Assuming getId() method is available in FileDocument, use the appropriate method
        }
        public Optional<FileDocument> downloadFile(String fileId){

            return fileRepository.findById(fileId);
        }

        public List<FileDocument> getAllFiles() {
            return fileRepository.findAll();
        }

        public boolean deleteFile(String fileId){
            Optional<FileDocument> fileDocumentOptional = fileRepository.findById(fileId);

            if (fileDocumentOptional.isPresent()){
                fileRepository.deleteById(fileId);
                return true;
            }else {

                return false;
            }
        }

        public List<FileDocument> searchFilesByPatientNIC(String patientNIC) {
            return fileRepository.findByPatientNIC(patientNIC);
        }

        public boolean updateFile(String fileId, MultipartFile file, String patientName, String patientNIC) throws IOException {
            Optional<FileDocument> existingFileOptional = fileRepository.findById(fileId);

            if (existingFileOptional.isPresent()){
                FileDocument existingFile = existingFileOptional.get();

                // Update file information
                existingFile.setFileName(file.getOriginalFilename());
                existingFile.setFileType(file.getContentType());
                existingFile.setData(file.getBytes());
                existingFile.setPatientName(patientName);
                existingFile.setPatientNIC(patientNIC);

                fileRepository.save(existingFile);
                return true;

            } else {
                return false;
  }

}
    }

