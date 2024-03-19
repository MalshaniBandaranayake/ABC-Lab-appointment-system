package com.icbt.LabAppointment.Service;

import com.icbt.LabAppointment.Entity.Appointment;
import com.icbt.LabAppointment.Repo.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentServices {

    private final AppointmentRepo repo;

    @Autowired
    public AppointmentServices(AppointmentRepo repo) {
        this.repo = repo;
    }

    public Iterable<Appointment> listAll() {
        return repo.findAll();
    }

    public void deleteAppointment(String id) {
        repo.deleteById(id);
    }

    public Appointment getAppointmentById(String appointmentid) {
        return repo.findById(appointmentid).orElse(null);
    }

    public Appointment getAppointmentByNIC(String nic) {
        return repo.findByNic(nic);
    }

    public void saveorUpdate(Appointment appointment) {
        repo.save(appointment);
    }
}
