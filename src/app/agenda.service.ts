import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from './Agenda';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  url = 'http://localhost:8080/agendas';

  constructor(private _httpClient: HttpClient) { }

  getAgenda(): Observable<Agenda[]> {
    return this._httpClient.get<Agenda[]>(this.url);
  }
}
