package com.icbt.LabAppointment.Repo;

import com.icbt.LabAppointment.Entity.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepo extends MongoRepository<Appointment, String> {
    Appointment findByNic(String nic);

}
