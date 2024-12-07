import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../Agenda';
import { AgendaService } from '../../agenda.service';

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

  loadAgenda(): void {
    this.service.getAgenda().subscribe(
      (data: Agenda[]) => {
        console.log('Dados carregados:', data);
        this.agendas = data;
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }
}
