import { AtividadeService } from 'src/app/services/atividade.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  logar(){
    this.router.navigate(['/home'])
    this.usuarioService.showMessage('Login realizado com sucesso! ')
  }
}