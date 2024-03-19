package com.icbt.LabAppointment.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patients")
public class Patient {

    @Id
    private String _id;
    private String nic;
    private String patientname;
    private String patientaddress;
    private String email;
    private String mobile;
    private String doctorname;

    public Patient(String _id, String nic, String patientname, String patientaddress, String email, String mobile, String doctorname) {
        this._id = _id;
        this.nic = nic;
        this.patientname = patientname;
        this.patientaddress = patientaddress;
        this.email = email;
        this.mobile = mobile;
        this.doctorname = doctorname;
    }

    public Patient() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getPatientname() {
        return patientname;
    }

    public void setPatientname(String patientname) {
        this.patientname = patientname;
    }

    public String getPatientaddress() {
        return patientaddress;
    }

    public void setPatientaddress(String patientaddress) {
        this.patientaddress = patientaddress;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getDoctorname() {
        return doctorname;
    }

    public void setDoctorname(String doctorname) {
        this.doctorname = doctorname;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "_id='" + _id + '\'' +
                ", nic='" + nic + '\'' +
                ", patientname='" + patientname + '\'' +
                ", patientaddress='" + patientaddress + '\'' +
                ", email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                ", doctorname='" + doctorname + '\'' +
                '}';
    }
}
