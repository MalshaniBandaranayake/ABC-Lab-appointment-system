package com.icbt.LabAppointment.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "payments")

public class Payment {

    @Id

    private String _id;
    private String nic;
    private String patientname;
    private  String email;
    private String testname;
    private String amount;
    private  String cardtype;
    private String cardnumber;
    private String securitycode;

    public Payment(String _id, String nic, String patientname, String email, String testname, String amount, String cardtype, String cardnumber, String securitycode) {
        this._id = _id;
        this.nic = nic;
        this.patientname = patientname;
        this.email = email;
        this.testname = testname;
        this.amount = amount;
        this.cardtype = cardtype;
        this.cardnumber = cardnumber;
        this.securitycode = securitycode;
    }

    public Payment() {
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTestname() {
        return testname;
    }

    public void setTestname(String testname) {
        this.testname = testname;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getCardtype() {
        return cardtype;
    }

    public void setCardtype(String cardtype) {
        this.cardtype = cardtype;
    }

    public String getCardnumber() {
        return cardnumber;
    }

    public void setCardnumber(String cardnumber) {
        this.cardnumber = cardnumber;
    }

    public String getSecuritycode() {
        return securitycode;
    }

    public void setSecuritycode(String securitycode) {
        this.securitycode = securitycode;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "_id='" + _id + '\'' +
                ", nic='" + nic + '\'' +
                ", patientname='" + patientname + '\'' +
                ", email='" + email + '\'' +
                ", testname='" + testname + '\'' +
                ", amount='" + amount + '\'' +
                ", cardtype='" + cardtype + '\'' +
                ", cardnumber='" + cardnumber + '\'' +
                ", securitycode='" + securitycode + '\'' +
                '}';
    }
}
