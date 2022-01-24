import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Artigo } from '../models/artigo.model';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  baseUrl = "http://localhost:3001/postagens"
 
  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient) { }
  
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] :['msg-success']
    })
  }

  create(artigo: Artigo): Observable<Artigo> {
    return this.http.post<Artigo>(this.baseUrl, artigo).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    console.log(e)
    return EMPTY;
  }

  read(): Observable<Artigo[]> {
    return this.http.get<Artigo[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
  }

readById(id: number): Observable<Artigo>{
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Artigo>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

update(artigo: Artigo): Observable<Artigo>{
  const url = `${this.baseUrl}/${artigo.id}`
  return this.http.put<Artigo>(url, artigo).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

delete(id: number): Observable<Artigo>{
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Artigo>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}

}
function postagem<T>(baseUrl: string, postagem: any) {
  throw new Error('Function not implemented.');
}