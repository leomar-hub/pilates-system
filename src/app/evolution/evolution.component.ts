import { Component, OnInit } from '@angular/core';
import { Evolution } from '../models/evolution.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {
  evolutions: Evolution[];
  patients: Patient[] = [];
  selectedPatient: Patient = null;
  newRecord: EvolutionRecord = { id: 0, date: '', weight: 0, height: 0, bmi: 0 };


  constructor(private dataService: DataService) {
    this.patients = this.dataService.getPatients();
  }


  ngOnInit() {
    this.evolutions = this.dataService.getEvolutions();
  }

  addEvolution(patientId: number, date: Date, description: string) {
    const evolution: Evolution = {
      id: this.evolutions.length + 1,
      patientId: patientId,
      date: date,
      description: description
    };
    this.dataService.addEvolution(evolution);
  }

  onPatientSelected(patient: Patient) {
    this.selectedPatient = patient;
    this.newRecord = { id: 0, date: '', weight: 0, height: 0, bmi: 0 };
  }

  onEvolutionSubmit(form: NgForm) {
    const record: EvolutionRecord = {
      id: this.selectedPatient.evolution.length + 1,
      date: this.newRecord.date,
      weight: this.newRecord.weight,
      height: this.newRecord.height,
      bmi: this.newRecord.weight / (this.newRecord.height ** 2)
    };

    this.selectedPatient.evolution.push(record);
    this.dataService.updatePatient(this.selectedPatient);

    this.newRecord = { id: 0, date: '', weight: 0, height: 0, bmi: 0 };
    form.reset();
  }
}
