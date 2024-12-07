import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAgendaComponent } from './components/list-agenda/list-agenda.component';
import { FormListComponent } from './components/form-list/form-list.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'agendas', component: ListAgendaComponent},
  {path: 'agenda/:id', component: FormListComponent},
  {path: 'agenda', component: FormListComponent},
  {path: 'home', component: ListAgendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
