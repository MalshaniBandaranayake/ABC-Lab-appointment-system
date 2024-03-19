package com.icbt.LabAppointment.Controller;


import com.icbt.LabAppointment.Entity.Appointment;
import com.icbt.LabAppointment.Service.AppointmentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/appointments")
public class AppointmentController {
    @Autowired
    private AppointmentServices appointmentServices;

    @PostMapping(value= "/save")
    private String saveAppointments(@RequestBody Appointment appointments) {
        appointmentServices.saveorUpdate(appointments);

        return appointments.get_id();
    }

    @GetMapping(value= "/getAll")
    private Iterable<Appointment>getAppointments(){


        return appointmentServices.listAll();
    }

    @PutMapping(value= "/edit/{id}")
    private Appointment update(@RequestBody Appointment appointment,@PathVariable(name = "id")String _id){


        appointment.set_id(_id);
        appointmentServices.saveorUpdate(appointment);
        return appointment;

    }

    @DeleteMapping("/delete/{id}")
    private void deleteAppointment(@PathVariable("id")String _id){
        appointmentServices.deleteAppointment(_id);


    }

    @RequestMapping("/search/{nic}") // Change the path variable to NIC
    private Appointment getAppointmentByNIC(@PathVariable(name = "nic") String nic) {
        return appointmentServices.getAppointmentByNIC(nic);
    }
}



