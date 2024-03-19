package com.icbt.LabAppointment.Controller;

import com.icbt.LabAppointment.Entity.EmailDetails;
import com.icbt.LabAppointment.Entity.Payment;
import com.icbt.LabAppointment.Repo.PaymentRepo;
import com.icbt.LabAppointment.Service.EmailService;
import com.icbt.LabAppointment.Service.PaymentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/payments")
public class PaymentController {

    @Autowired
    private PaymentServices paymentServices;

    @Autowired
    private EmailService emailService;

    @Autowired // Autowire PaymentRepo
    private PaymentRepo paymentRepo;

    @PostMapping(value= "/save")
    public ResponseEntity<String> savePayments(@RequestBody Payment payments){
        Payment savedPayment = paymentServices.saveOrUpdate(payments); // Updated method name
        if (savedPayment != null) {
            sendConfirmationEmail(savedPayment);
            return ResponseEntity.ok(savedPayment.get_id());
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save payment.");
        }
    }



    private void sendConfirmationEmail(Payment payment){
        String toEmail = payment.getEmail();
        String subject = "ABC LABORATORY - Payment Confirmation";
        String body = "Dear " + payment.getPatientname() + ", \n\n"
                + "Thank you for your payment\n"
                + "Details:\n"
                + "Nic: " + payment.getNic() + "\n"
                + "Email: " + payment.getEmail() + "\n"
                + "Test Name: " + payment.getTestname() + "\n"
                + "Amount: " + payment.getAmount() + "\n"
                + "Card Type: " + payment.getCardtype() + "\n"
                + "Card Number: " + payment.getCardnumber() + "\n"
                + "Security Code: " + payment.getSecuritycode() + "\n\n"
                + "\nBest Regards,\nABC LABORATORY ADMIN";

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setRecipient(toEmail);
        emailDetails.setSubject(subject);
        emailDetails.setMsgBody(body);

        // Payment details to include in the email
        String paymentDetails = "Test Name: " + payment.getTestname() + "\n" +
                //"Amount: " + payment.getAmount() + "\n" +
               // "Card Type: " + payment.getCardtype() + "\n" +
               // "Card Number: " + payment.getCardnumber() + "\n" +
                "Security Code: " + payment.getSecuritycode() + "\n";

        // Send email with payment details
        emailService.sendMailWithPaymentDetails(emailDetails, paymentDetails);
    }

    @GetMapping(value= "/getAll")
    public Iterable<Payment> getPayments(){

        return paymentRepo.findAll();
    }

    @PutMapping(value= "/edit/{id}")
    public Payment update(@RequestBody Payment payment,@PathVariable(name = "id")String id){
        payment.set_id(id);
        Payment updatedPayment = paymentRepo.save(payment);
        return updatedPayment;
    }

    @DeleteMapping("/delete/{id}")
    public void deletePayment(@PathVariable("id") String id){
        paymentRepo.deleteById(id);
    }

    @RequestMapping("/search/{nic}") // Change the path variable to NIC
    public Payment getPaymentByNIC(@PathVariable(name = "nic") String nic) {
        return paymentRepo.findByNic(nic);
    }


}
