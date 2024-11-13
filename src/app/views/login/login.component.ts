import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';
import { Client } from '../../models/client-model/client';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

  export class LoginComponent {
    successMessage: string | null = null;
    errorMessage: string | null = null;
    email: string = '';
    password: string = '';

    constructor(private clientService: ClientService, private router: Router) {}

    
    //redireciona para o cadastro, enviando os dados do cliente autenticado, possível alterar e deletar
  

    onLogin() {
      if (!this.email || !this.password) {
        this.errorMessage = 'Insira um login válido';
        this.successMessage = null;
        return;
      }
    
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.errorMessage = 'Insira um e-mail válido';
        this.successMessage = null;
        return;
      }
    
      this.clientService.login(this.email, this.password).subscribe({
        next: (response: Client) => {
          this.successMessage = 'Login efetuado com sucesso!';
          this.errorMessage = null;
    
          
          this.router.navigate(['/create-new-user'], { state: { clientData: response } });
        },
        error: (err) => {
          this.errorMessage = err.status === 401 ? 'Usuário e senha inválidos' : 'Erro ao tentar fazer login. Tente novamente mais tarde';
          this.successMessage = null;
        }
      });
    }
    
    
  }    