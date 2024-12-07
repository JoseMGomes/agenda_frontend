import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css',
})
export class FormListComponent implements OnInit {
  Editing = false;
  Creating = true;

  formGroupAgenda: FormGroup;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: AgendaService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupAgenda = this.formBuilder.group({
      id: [''],
      description: [''],
      duration: [''],
      local: [''],
    });
  }

  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    if (id !== 0) {
      this.Editing = true;
      this.Creating = false;
      this.loadAgenda(id);
    }
  }

  loadAgenda(id: number) {
    this.service.getAgendaById(id).subscribe({
      next: (data) => this.formGroupAgenda.setValue(data),
    });
  }

  update() {
    this.service.update(this.formGroupAgenda.value).subscribe({
      next: () => {
        this.router.navigate(['agendas']);
        this.Editing = false;
      },
    });
  }

  save() {
    this.service.save(this.formGroupAgenda.value).subscribe({
      next: () => {
        this.router.navigate(['agendas']);
        this.Creating = true;
      },
    });
  }
}
