package com.icbt.LabAppointment.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document(collection = "files")
public class FileDocument {

    @Id
    private String _id;
    private String fileName;
    private String fileType;
    private byte[] data;
    private String patientName;
    private String patientNIC;

    public FileDocument(String _id, String fileName, String fileType, byte[] data, String patientName, String patientNIC) {
        this._id = _id;
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.patientName = patientName;
        this.patientNIC = patientNIC;
    }

    public FileDocument() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getPatientNIC() {
        return patientNIC;
    }

    public void setPatientNIC(String patientNIC) {
        this.patientNIC = patientNIC;
    }

    @Override
    public String toString() {
        return "FileDocument{" +
                "_id='" + _id + '\'' +
                ", fileName='" + fileName + '\'' +
                ", fileType='" + fileType + '\'' +
                ", data=" + Arrays.toString(data) +
                ", patientName='" + patientName + '\'' +
                ", patientNIC='" + patientNIC + '\'' +
                '}';
    }
}
