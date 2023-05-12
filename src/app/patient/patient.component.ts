import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Patient[];
  newPatient: Patient = { id: 0, name: '', phone: '', email: '', birthdate: '' };


  constructor(private dataService: DataService) {
    this.patients = this.dataService.getPatients();
  }

  ngOnInit() {
    this.patients = this.dataService.getPatients();
  }

  addPatient(name: string, phone: string, email: string, birthdate: Date) {
    const patient: Patient = {
      id: this.patients.length + 1,
      name: name,
      phone: phone,
      email: email,
      birthdate: birthdate
    };
    this.dataService.addPatient(patient);
  }

  onPatientSubmit(form: NgForm) {
    const patient: Patient = {
      id: this.patients.length + 1,
      name: this.newPatient.name,
      phone: this.newPatient.phone,
      email: this.newPatient.email,
      birthdate: this.newPatient.birthdate
    };
    this.dataService.addPatient(patient);
    this.newPatient = { id: 0, name: '', phone: '', email: '', birthdate: '' };
    form.resetForm();
  }
}
