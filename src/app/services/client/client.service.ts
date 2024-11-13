import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../models/client-model/client';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) {}

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
  
  
}
