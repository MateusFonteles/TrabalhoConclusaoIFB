import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Atividade } from '../models/atividade.model';
import { map, catchError } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);



@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  baseUrl = "http://localhost:3001/atividades"
  storageRef = firebase.app().storage().ref();

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

    async subirImagem(nome:string,imgBase64:any){
      try{
        let resposta = await this.storageRef.child("users/"+nome).putString(imgBase64, 'data_url');
        console.log(resposta);
        return await resposta.ref.getDownloadURL();
      }catch(err){
        console.log(err);
        return null;
      }
    }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] :['msg-success']
    })
  }

  create(atividade: Atividade): Observable<Atividade> {
    return this.http.post<Atividade>(this.baseUrl, atividade).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    console.log(e)
    return EMPTY;
  }

  read(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
  }

readById(id: number): Observable<Atividade>{
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Atividade>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

update(atividade: Atividade): Observable<Atividade>{
  const url = `${this.baseUrl}/${atividade.id}`
  return this.http.put<Atividade>(url, atividade).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

delete(id: number): Observable<Atividade>{
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Atividade>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}

}
function postagem<T>(baseUrl: string, postagem: any) {
  throw new Error('Function not implemented.');
}

