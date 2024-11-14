import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Client } from '../../models/client-model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) {}
  private apiUrl = 'http://localhost:8081/api';

  gravar(obj: Client) : Observable<Object> {
    return this.http.post("http://localhost:8081/api/cliente", obj)

  }
  alterar(cpf: string, cliente: Client) {
    return this.http.put(`http://localhost:8081/api/cliente/${cpf}`, cliente, { responseType: 'text' });
  }
    
  pesquisar(cpf: string): Observable<Client> {
    return this.http.get<Client>(`http://localhost:8081/api/cliente/${cpf}`);
  }  
  
  remover(cpf: string) {
    return this.http.delete(`http://localhost:8081/api/cliente/${cpf}`);
  }

  login(email: string, password: string) {
    console.log("Enviando dados para o back-end:", { email, password });
  
    return this.http.post<Client>(`${this.apiUrl}/cliente/login`, { email, password }).pipe(
      catchError((err) => {
        console.error("Erro ao fazer requisição ao back-end:", err);
        throw err;
      })
    );
  }  
  
  recoverPassword(email: string) {
    return this.http.post<string>(`${this.apiUrl}/cliente/recupera`, { email }).pipe(
      catchError((err) => {
        console.error("Erro ao solicitar recuperação de senha:", err);
        throw err; 
      })
    );
  }
  
  
}

