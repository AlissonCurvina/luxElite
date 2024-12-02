import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Client } from '../../models/client-model/client';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient, private authService: AuthService) {}
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

  login(email: string, password: string): Observable<Client> {
    return this.authService.login(email, password);
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

