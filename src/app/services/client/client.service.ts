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

  Inserir(obj: Client) : string {
    let message = "";
    this.http.post("http://localhost:8081/api/cliente", obj)
    .subscribe(
      {
        next:(data) => {
          message = "Cliente cadastrado com sucesso!";
        },
        error:(err) => {
          message = "Ocorreu um erro!";
        }
      }
    );
    return message;

  }
}
