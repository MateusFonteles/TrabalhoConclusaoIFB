import { Categoria } from './../../models/categoria.model';
import { AtividadeService } from './../../services/atividade.service';
import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/models/atividade.model';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  categorias: Categoria[]
  atividades: Atividade[]
  materiaSelecionada:any = ''
  atividade: Atividade
  totalLenght: any;
  page:number;
  atividadesArray:[]

  constructor(
    private atividadeService : AtividadeService,
    private categoriaService:CategoriaService,
    ) { }

    ngOnInit(): void {
      this.atividadeService.read().subscribe(atividades => {
        this.atividades = atividades
        this.totalLenght = atividades.length
      }),
      this.categoriaService.read().subscribe(categorias => {
        this.categorias = categorias
      })
    }

  selecionarMateria(categoria:any): void {
    const arrayAtividades:Atividade[] = [];
    this.materiaSelecionada = categoria
      for (let atividade of this.atividades){
        if (atividade.materia == this.materiaSelecionada){
          arrayAtividades.push(atividade)
          console.log(arrayAtividades)
        }else{
          console.log('outras')
                }
              }
    }



  reiniciarMateriaSelecionada(){
    this.materiaSelecionada = '';
  }

}
