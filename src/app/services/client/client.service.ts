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
  alterar(obj: Client) : Observable<Object> {
    return this.http.put("http://localhost:8081/api/cliente", obj);
  }

  pesquisar(cpf: string) : Observable<any> {
    return this.http.get("http://localhost:8081/api/cliente/"+ cpf);
  }
}