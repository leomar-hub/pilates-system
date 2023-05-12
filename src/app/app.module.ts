
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PatientComponent } from './patient/patient.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FinanceComponent } from './finance/finance.component';
import { EvolutionComponent } from './evolution/evolution.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PatientComponent,
    AgendaComponent,
    FinanceComponent,
    EvolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // adicionar FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

