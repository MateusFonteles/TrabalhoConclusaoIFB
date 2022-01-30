import { MatSort, MatSortModule } from '@angular/material/sort';
import { Observable, Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/models/atividade.model';
import { AtividadeService } from 'src/app/services/atividade.service';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-atividades-visualizar',
  templateUrl: './atividades-visualizar.component.html',
  styleUrls: ['./atividades-visualizar.component.css']
})
export class AtividadesVisualizarComponent implements OnInit {

  atividades: Atividade[]
  displayedColumns = ['id', 'imagem', 'titulo', 'materia', 'serie', 'descricao', 'data', 'action']

  constructor(private atividadeService: AtividadeService) { }

  ngOnInit(): void {
    this.atividadeService.read().subscribe(atividades => {
      this.atividades = atividades
    });
  }

}
