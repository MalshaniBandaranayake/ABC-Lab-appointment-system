package com.icbt.LabAppointment.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "appointments")
public class Appointment {
    @Id

    private String _id;
    private String nic;
    private String patientName;
    private String date;
    private String time;
    private String number;

    public Appointment(String _id, String nic, String patientName, String date, String time, String number) {
        this._id = _id;
        this.nic = nic;
        this.patientName = patientName;
        this.date = date;
        this.time = time;
        this.number = number;
    }

    public Appointment() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getnic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "_id='" + _id + '\'' +
                ", nic='" + nic + '\'' +
                ", patientName='" + patientName + '\'' +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", number='" + number + '\'' +
                '}';
    }
}
