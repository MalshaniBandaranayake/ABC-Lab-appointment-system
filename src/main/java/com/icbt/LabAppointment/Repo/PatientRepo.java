package com.icbt.LabAppointment.Repo;

import com.icbt.LabAppointment.Entity.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepo extends MongoRepository<Patient, String> {

}
