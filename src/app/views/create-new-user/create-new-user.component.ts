import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-new-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-new-user.component.html',
  styleUrl: './create-new-user.component.css'
})
export class CreateNewUserComponent {
  successMessage: string | null = null;

  onCreate() {
    // define a mensagem de sucesso
    // colocar melhor logica dps
    this.successMessage = 'Conta criada com sucesso!';
  }
}
