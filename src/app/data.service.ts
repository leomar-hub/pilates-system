import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Patient } from './models/patient.model';
import { Appointment } from './models/appointment.model';
import { Finance } from './models/finance.model';
import { Evolution } from './models/evolution.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users: User[] = [
    { id: 1, name: 'User 1', email: 'user1@example.com', password: 'password1' },
    { id: 2, name: 'User 2', email: 'user2@example.com', password: 'password2' },
    { id: 3, name: 'User 3', email: 'user3@example.com', password: 'password3' }
  ];

  private patients: Patient[] = [];

  private appointments: Appointment[] = [];

  private finances: Finance[] = [];

  private evolutions: Evolution[] = [];

  constructor() { }

  // User methods
  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  // Patient methods
  getPatients(): Patient[] {
    return this.patients;
  }

  addPatient(patient: Patient) {
    this.patients.push(patient);
  }

  // Appointment methods
  getAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }

  // Finance methods
  getFinances(): Finance[] {
    return this.finances;
  }

  addFinance(finance: Finance) {
    this.finances.push(finance);
  }

  // Evolution methods
  getEvolutions(): Evolution[] {
    return this.evolutions;
  }

  addEvolution(evolution: Evolution) {
    this.evolutions.push(evolution);
  }
}

