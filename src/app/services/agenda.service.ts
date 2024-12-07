import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from '../Agenda';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  url = 'http://localhost:8080/agendas';

  constructor(private http: HttpClient) { }

  getAgenda(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.url);
  }

  delete(agenda: Agenda): Observable<void>{
    return this.http.delete<void>(`${this.url}/${agenda.id}`);
  }
}
