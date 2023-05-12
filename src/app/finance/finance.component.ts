import { Component, OnInit } from '@angular/core';
import { Finance } from '../models/finance.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  finances: Finance[];
  payments: Payment[] = [];
  patients: Patient[] = [];
  newPayment: Payment = { id: 0, date: '', patient: null, amount: 0 };

  constructor(private dataService: DataService) {
    this.payments = this.dataService.getPayments();
    this.patients = this.dataService.getPatients();
  }

  ngOnInit() {
    this.finances = this.dataService.getFinances();
  }

  addFinance(description: string, value: number, date: Date) {
    const finance: Finance = {
      id: this.finances.length + 1,
      description: description,
      value: value,
      date: date
    };
    this.dataService.addFinance(finance);
  }

  onPaymentSubmit(form: NgForm) {
    const payment: Payment = {
      id: this.payments.length + 1,
      date: this.newPayment.date,
      patient: this.newPayment.patient,
      amount: this.newPayment.amount
    };
    this.dataService.addPayment(payment);
    this.newPayment = { id: 0, date: '', patient: null, amount: 0 };
    form.resetForm();
  }

}
