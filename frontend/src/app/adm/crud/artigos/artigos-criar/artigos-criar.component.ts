import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artigo } from 'src/app/models/artigo.model';
import { ArtigoService } from 'src/app/services/artigo.service';

@Component({
  selector: 'app-artigos-criar',
  templateUrl: './artigos-criar.component.html',
  styleUrls: ['./artigos-criar.component.css']
})
export class ArtigosCriarComponent implements OnInit {

  dataPub : string = new Date().toLocaleString()

  artigo: Artigo = {
    titulo: '',
    texto: '',
    autor: '',
    descricao:'',
    data: this.dataPub,
  }
 
 
   constructor(private artigoService: ArtigoService, 
     private router: Router) { }
  
   ngOnInit(): void {
   }
 
   criarArtigo(): void{
     this.artigoService.create(this.artigo).subscribe(() => {
       this.artigoService.showMessage('Artigo criado!')
       this.router.navigate(['/adm-artigos'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/adm-artigos'])
   }
   
 }