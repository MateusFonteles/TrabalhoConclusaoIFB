// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
registerLocaleData(localePt);

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
//Components
import { AdmHomeComponent } from './adm/adm-home/adm-home.component'
import { ArtigoComponent } from './telas/artigo/artigo.component';
import { AtividadeComponent } from './telas/atividade/atividade.component';
import { AtividadesComponent } from './telas/atividades/atividades.component';
import { ContatoComponent } from './telas/contato/contato.component';
import { ContribuaComponent } from './telas/contribua/contribua.component';
import { HeaderComponent } from './nav/header/header.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { HomeComponent } from './telas/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './usr/login/login.component';
import { PerfilComponent } from './usr/perfil/perfil.component';
import { RecuperarSenhaComponent } from './usr/recuperar-senha/recuperar-senha.component';
import { SobreComponent } from './telas/sobre/sobre.component';
import { AtividadesCriarComponent } from './adm/crud/atividades/atividades-criar/atividades-criar.component';
import { AtividadesVisualizarComponent } from './adm/crud/atividades/atividades-visualizar/atividades-visualizar.component';
import { AtividadesModificarComponent } from './adm/crud/atividades/atividades-modificar/atividades-modificar.component';
import { AtividadesExcluirComponent } from './adm/crud/atividades/atividades-excluir/atividades-excluir.component';
import { ArtigosCriarComponent } from './adm/crud/artigos/artigos-criar/artigos-criar.component';
import { ArtigosVisualizarComponent } from './adm/crud/artigos/artigos-visualizar/artigos-visualizar.component';
import { ArtigosModificarComponent } from './adm/crud/artigos/artigos-modificar/artigos-modificar.component';
import { ArtigosExcluirComponent } from './adm/crud/artigos/artigos-excluir/artigos-excluir.component';
import { CategoriasCriarComponent } from './adm/crud/categorias/categorias-criar/categorias-criar.component';
import { CategoriasVisualizarComponent } from './adm/crud/categorias/categorias-visualizar/categorias-visualizar.component';
import { CategoriasModificarComponent } from './adm/crud/categorias/categorias-modificar/categorias-modificar.component';
import { CategoriasExcluirComponent } from './adm/crud/categorias/categorias-excluir/categorias-excluir.component';
import { UsuariosVisualizarComponent } from './adm/crud/usuarios/usuarios-visualizar/usuarios-visualizar.component';
import { UsuariosExcluirComponent } from './adm/crud/usuarios/usuarios-excluir/usuarios-excluir.component';
import { UsuariosCriarComponent } from './usr/usuarios-criar/usuarios-criar.component';
import { UsuariosModificarComponent } from './usr/usuarios-modificar/usuarios-modificar.component';
import { UsuariosModificarSenhaComponent } from './usr/usuarios-modificar-senha/usuarios-modificar-senha.component';
import { AtividadesCrudComponent } from './adm/atividades-crud/atividades-crud.component';
import { ArtigosCrudComponent } from './adm/artigos-crud/artigos-crud.component';
import { UsuariosCrudComponent } from './adm/usuarios-crud/usuarios-crud.component';
import { CategoriasCrudComponent } from './adm/categorias-crud/categorias-crud.component';
import { ArtigosComponent } from './telas/artigos/artigos.component';
import { TesteComponent } from './teste/teste.component';
import { TesteMostrarComponent } from './teste/teste/teste-mostrar.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { Base64Component } from './base64/base64.component';
@NgModule({
  declarations: [
    AppComponent,
    AdmHomeComponent,
    ArtigoComponent,
    AtividadeComponent,
    AtividadesComponent,
    ContatoComponent,
    ContribuaComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    PerfilComponent,
    RecuperarSenhaComponent,
    SobreComponent,
    AtividadesCriarComponent,
    AtividadesVisualizarComponent,
    AtividadesModificarComponent,
    AtividadesExcluirComponent,
    ArtigosCriarComponent,
    ArtigosVisualizarComponent,
    ArtigosModificarComponent,
    ArtigosExcluirComponent,
    CategoriasCriarComponent,
    CategoriasVisualizarComponent,
    CategoriasModificarComponent,
    CategoriasExcluirComponent,
    UsuariosVisualizarComponent,
    UsuariosExcluirComponent,
    UsuariosCriarComponent,
    UsuariosModificarComponent,
    UsuariosModificarSenhaComponent,
    AtividadesCrudComponent,
    ArtigosCrudComponent,
    UsuariosCrudComponent,
    CategoriasCrudComponent,
    ArtigosComponent,
    TesteComponent,
    TesteMostrarComponent,
    UploadFileComponent,
    Base64Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    RouterModule,
    NgxDropzoneModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatExpansionModule,
    MatSidenavModule,

  ],
  providers: [
    AtividadesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }