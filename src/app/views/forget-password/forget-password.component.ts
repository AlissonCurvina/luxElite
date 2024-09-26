import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule para o [(ngModel)]

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  email: string = ''; // variável para armazenar o email inserido
  successMessage: string | null = null; // variável para armazenar a mensagem de sucesso

  // função chamada ao clicar em "Enviar Link"
  onSendLink() {
    if (this.email) { 
      // simulação do envio do email e exibição da mensagem de sucesso
      this.successMessage = 'Email enviado com sucesso!';
    } else {
      this.successMessage = 'Por favor, insira um email válido.';
    }

    // adicionar a lógica real de envio de link para recuperação de senha
  }
}
