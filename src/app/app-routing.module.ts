import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PatientComponent } from './patient/patient.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FinanceComponent } from './finance/finance.component';
import { EvolutionComponent } from './evolution/evolution.component';


const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'evolution', component: EvolutionComponent },
  { path: '', redirectTo: '/patients', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
