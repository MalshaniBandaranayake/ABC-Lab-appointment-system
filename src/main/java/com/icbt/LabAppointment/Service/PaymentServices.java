package com.icbt.LabAppointment.Service;

import com.icbt.LabAppointment.Entity.Payment;
import com.icbt.LabAppointment.Repo.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentServices {

    @Autowired
    private PaymentRepo repo;

    public Iterable<Payment> listAll() {
        return repo.findAll();
    }

    public void deletePayment(String id) {
        repo.deleteById(id);
    }

    public Payment getPaymentById(String paymentid) {
        return repo.findById(paymentid).orElse(null);
    }

    public Payment getPaymentByNIC(String nic) {
        return repo.findByNic(nic);
    }

    public Payment saveOrUpdate(Payment payment) {
        return repo.save(payment);
    }
}
