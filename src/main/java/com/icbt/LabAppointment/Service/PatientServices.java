package com.icbt.LabAppointment.Service;


import com.icbt.LabAppointment.Entity.Patient;
import com.icbt.LabAppointment.Repo.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PatientServices {

    @Autowired
    private PatientRepo repo;
    public void saveorUpdate(Patient patients) {

        repo.save(patients);
    }

    public Iterable<Patient> listAll() {

        return this.repo.findAll();
    }

    public void deletePatient(String id) {
        repo.deleteById(id);
    }


    public Patient getPatientById(String patientid) {
        return repo.findById(patientid).get();
    }
}
