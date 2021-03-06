import { Categoria } from '../models/categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = "http://localhost:3001/categorias"
 
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] :['msg-success']
    })
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.baseUrl, categoria).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    console.log(e)
    return EMPTY;
  }

  read(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
  }

readById(id: number): Observable<Categoria>{
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Categoria>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

update(categoria: Categoria): Observable<Categoria>{
  const url = `${this.baseUrl}/${categoria.id}`
  return this.http.put<Categoria>(url, categoria).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

delete(id: number): Observable<Categoria>{
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Categoria>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}

}
function categoria<T>(baseUrl: string, categoria: any) {
  throw new Error('Function not implemented.');
}