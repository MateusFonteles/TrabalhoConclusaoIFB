import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios-criar',
  templateUrl: './usuarios-criar.component.html',
  styleUrls: ['./usuarios-criar.component.css']
})
export class UsuariosCriarComponent implements OnInit {

  dataPub : string = new Date().toLocaleString()

  usuario: Usuario = {
    nome: '',
    email: '',
    cpf: '',
    senha:'',
    data: this.dataPub,
  }
 
 
   constructor(private usuarioService: UsuarioService, 
     private router: Router) { }
  
   ngOnInit(): void {
   }
 
   criarUsuario(): void{
     this.usuarioService.create(this.usuario).subscribe(() => {
       this.usuarioService.showMessage('Usuário cadastrado com sucesso!')
       this.router.navigate(['/'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/'])
   }
   
 }