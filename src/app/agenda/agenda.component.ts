import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  appointments: Appointment[];
  patients: Patient[] = [];
  newAppointment: Appointment = { id: 0, date: '', time: '', patient: null, treatment: '', notes: '' };

  constructor(private dataService: DataService) {
    this.appointments = this.dataService.getAppointments();
    this.patients = this.dataService.getPatients();
  }

  ngOnInit() {
    this.appointments = this.dataService.getAppointments();
  }

  addAppointment(patientId: number, date: Date, time: string) {
    const appointment: Appointment = {
      id: this.appointments.length + 1,
      patientId: patientId,
      date: date,
      time: time
    };
    this.dataService.addAppointment(appointment);
  }

  onAppointmentSubmit(form: NgForm) {
    const appointment: Appointment = {
      id: this.appointments.length + 1,
      date: this.newAppointment.date,
      time: this.newAppointment.time,
      patient: this.newAppointment.patient,
      treatment: this.newAppointment.treatment,
      notes: this.newAppointment.notes
    };
    this.dataService.addAppointment(appointment);
    this.newAppointment = { id: 0, date: '', time: '', patient: null, treatment: '', notes: '' };
    form.resetForm();
  }
}
