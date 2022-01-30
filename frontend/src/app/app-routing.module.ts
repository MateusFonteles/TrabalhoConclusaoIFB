import { SubirImagensComponent } from './adm/subir-imagens/subir-imagens.component';
import { UploadFileComponent } from './dummies/upload-file/upload-file.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AdmHomeComponent } from './adm/adm-home/adm-home.component'
import { ArtigoComponent } from './telas/artigo/artigo.component';
import { AtividadeComponent } from './telas/atividade/atividade.component';
import { AtividadesComponent } from './telas/atividades/atividades.component';
import { ContatoComponent } from './telas/contato/contato.component';
import { ContribuaComponent } from './telas/contribua/contribua.component';
import { HomeComponent } from './telas/home/home.component';
import { LoginComponent } from './usr/login/login.component';
import { PerfilComponent } from './usr/perfil/perfil.component';
import { RecuperarSenhaComponent } from './usr/recuperar-senha/recuperar-senha.component';
import { SobreComponent } from './telas/sobre/sobre.component';
import { AtividadesCriarComponent } from './adm/crud/atividades/atividades-criar/atividades-criar.component';
import { AtividadesModificarComponent } from './adm/crud/atividades/atividades-modificar/atividades-modificar.component';
import { AtividadesExcluirComponent } from './adm/crud/atividades/atividades-excluir/atividades-excluir.component';
import { ArtigosCriarComponent } from './adm/crud/artigos/artigos-criar/artigos-criar.component';
import { ArtigosModificarComponent } from './adm/crud/artigos/artigos-modificar/artigos-modificar.component';
import { ArtigosExcluirComponent } from './adm/crud/artigos/artigos-excluir/artigos-excluir.component';
import { CategoriasCriarComponent } from './adm/crud/categorias/categorias-criar/categorias-criar.component';
import { CategoriasModificarComponent } from './adm/crud/categorias/categorias-modificar/categorias-modificar.component';
import { CategoriasExcluirComponent } from './adm/crud/categorias/categorias-excluir/categorias-excluir.component';
import { UsuariosExcluirComponent } from './adm/crud/usuarios/usuarios-excluir/usuarios-excluir.component';
import { UsuariosCriarComponent } from './usr/usuarios-criar/usuarios-criar.component';
import { UsuariosModificarComponent } from './usr/usuarios-modificar/usuarios-modificar.component';
import { UsuariosModificarSenhaComponent } from './usr/usuarios-modificar-senha/usuarios-modificar-senha.component';
import { AtividadesCrudComponent } from './adm/atividades-crud/atividades-crud.component';
import { ArtigosCrudComponent } from './adm/artigos-crud/artigos-crud.component';
import { UsuariosCrudComponent } from './adm/usuarios-crud/usuarios-crud.component';
import { CategoriasCrudComponent } from './adm/categorias-crud/categorias-crud.component';
import { ArtigosComponent } from './telas/artigos/artigos.component';
import { DropzoneComponent } from './dropzone/dropzone/dropzone.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'artigos', component: ArtigosComponent},
  { path: 'artigo/:id', component: ArtigoComponent},
  { path: 'atividades', component: AtividadesComponent},
  { path: 'atividade/:id', component: AtividadeComponent},
  { path: 'sobre', component: SobreComponent },
  { path: 'contribua', component: ContribuaComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'adm', component: AdmHomeComponent},
  { path: 'adm-atividades', component: AtividadesCrudComponent},
  { path: 'adm-criar-atividade', component: AtividadesCriarComponent},
  { path: 'adm-modificar-atividade/:id', component: AtividadesModificarComponent},
  { path: 'adm-excluir-atividade/:id', component: AtividadesExcluirComponent},
  { path: 'adm-artigos', component: ArtigosCrudComponent},
  { path: 'adm-criar-artigo', component: ArtigosCriarComponent},
  { path: 'adm-modificar-artigo/:id', component: ArtigosModificarComponent},
  { path: 'adm-excluir-artigo/:id', component: ArtigosExcluirComponent},
  { path: 'adm-usuarios', component: UsuariosCrudComponent},
  { path: 'adm-excluir-usuario/:id', component: UsuariosExcluirComponent},
  { path: 'adm-categorias', component: CategoriasCrudComponent},
  { path: 'adm-criar-categoria', component: CategoriasCriarComponent},
  { path: 'adm-modificar-categoria/:id', component: CategoriasModificarComponent},
  { path: 'adm-excluir-categoria/:id', component: CategoriasExcluirComponent },
  { path: 'usuario-login', component: LoginComponent},
  { path: 'usuario-recuperar-senha', component: RecuperarSenhaComponent},
  { path: 'usuario-cadastro', component: UsuariosCriarComponent},
  { path: 'usuario-modificar-usuario/:id', component: UsuariosModificarComponent},
  { path: 'usuario-modificar-senha/:id', component: UsuariosModificarSenhaComponent},
  { path: 'usuario/:id', component: PerfilComponent},
  {path: 'upload-file', component: UploadFileComponent},
  { path: 'dropzone', component: DropzoneComponent},
  { path: 'subir-imagens', component: SubirImagensComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
