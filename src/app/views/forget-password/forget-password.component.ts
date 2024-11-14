import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  email: string = ''; 
  successMessage: string | null = null; 
  errorMessage: string | null = null;   

  //email identificado na api e exibição da mensagem de recuperação de senha ok

  constructor(private clientService: ClientService) {}


  onRecoverPassword() {
    if (!this.email) {
      this.errorMessage = 'Por favor, insira um e-mail válido';
      return;
    }
  
    this.clientService.recoverPassword(this.email).subscribe({
      next: (response: any) => {
        this.successMessage = response.message; 
        this.errorMessage = null;
      },
      error: (err) => {
        if (err.status === 404) {
          this.errorMessage = 'E-mail não encontrado';
        } else {
          this.errorMessage = 'Erro ao solicitar recuperação de senha. Tente novamente mais tarde.';
        }
        this.successMessage = null;
      }
    });
  }
  
}
