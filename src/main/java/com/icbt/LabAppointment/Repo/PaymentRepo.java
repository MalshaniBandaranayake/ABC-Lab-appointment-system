package com.icbt.LabAppointment.Repo;

import com.icbt.LabAppointment.Entity.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepo extends MongoRepository<Payment, String> {
    Payment findByNic(String nic);
}
