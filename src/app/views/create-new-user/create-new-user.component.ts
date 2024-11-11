import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/client-model/client';
import { ClientService } from '../../services/client/client.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-create-new-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-new-user.component.html',
  styleUrl: './create-new-user.component.css'
})
export class CreateNewUserComponent {
  message: string = '';
  obj: Client = new Client();
  
  constructor(private service: ClientService){}

  gravar() { //completo
    console.log("Dados antes de enviar:", this.obj);
    this.service.gravar(this.obj).subscribe({
      next: (data) => {
        this.message = "Cliente inserido!";
        console.log("Resposta do backend:", data);
      },
      error: (err) => {
        this.message = "Ocorreu um problema, tente mais tarde!";
        console.error("Erro ao gravar:", err);
      }
    });
  }  

  alterar() { //incompleto, deu erro de cors
    if (!this.obj.cpf) {
      this.message = "Por favor, insira um CPF válido.";
      return;
    }
  
    console.log("Alterando cliente:", this.obj);
  
    this.service.alterar(this.obj).subscribe({
      next: (data) => {
        this.message = "Cliente alterado com sucesso!";
        console.log("Resposta do backend:", data);
      },
      error: (err) => {
        this.message = "Ocorreu um problema, tente mais tarde!";
        console.error("Erro ao alterar:", err);
      }
    });
  }
  
  pesquisar() { //completo
    if (!this.obj.cpf) {
      this.message = "Por favor, insira um CPF válido.";
      return;
    }
  
    console.log("Pesquisando cliente com CPF:", this.obj.cpf);
  
    this.service.pesquisar(this.obj.cpf).subscribe({
      next: (data) => {
        if (!data) {
          this.message = "Registro não encontrado!";
        } else {
          this.obj = data; 
          this.message = "";
        }
      },
      error: (err) => {
        this.message = "Ocorreu um problema, tente mais tarde!";
        console.error("Erro ao pesquisar:", err);
      }
    });
  }

  remover(){} //pendente
  
    
}
