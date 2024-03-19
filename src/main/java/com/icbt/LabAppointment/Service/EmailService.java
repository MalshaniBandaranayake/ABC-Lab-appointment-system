package com.icbt.LabAppointment.Service;


import com.icbt.LabAppointment.Entity.EmailDetails;

// Interface
public interface EmailService {

    // Method
    // To send a simple email
    String sendSimpleMail(EmailDetails details);

    String sendMailWithPaymentDetails(EmailDetails emailDetails, String paymentDetails);

    // Method
    // To send an email with attachment
    //String sendMailWithAttachment(EmailDetails details);
}
