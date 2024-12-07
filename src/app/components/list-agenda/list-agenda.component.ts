import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../Agenda';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-list-agenda',
  templateUrl: './list-agenda.component.html',
  styleUrls: ['./list-agenda.component.css']
})
export class ListAgendaComponent implements OnInit {
  public agendas: Agenda[] = [];

  constructor(private service: AgendaService){}

  ngOnInit(): void {
      this.loadAgenda();
  }

  loadAgenda(){
    this.service.getAgenda().subscribe({
      next: (data)=> (this.agendas = data),
    })
  }

  delete(agenda: Agenda){
    this.service.delete(agenda).subscribe({
      next: ()=> this.loadAgenda(),
    })
  }

}
