import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewUserComponent } from '../create-new-user/create-new-user.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  successMessage: string | null = null;
  errorMessage: any;
  email: any;
  password: any;

  onLogin() {
    //verificação se os campos estão vazios
    if (!this.email || !this.password) {
      this.errorMessage = 'Insira um login válido';
      this.successMessage = null;
      return;
    }

    //verificação do formato do email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expressão regular para validar email
    if (!emailPattern.test(this.email)) {
      this.errorMessage = 'Insira um email válido';
      this.successMessage = null;
      return;
    }

    //lógica de login (simulação)
    if (this.email === 'evillynascicosta@gmail.com' && this.password === '123456') {
      this.successMessage = 'Login efetuado com sucesso!';
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Credenciais inválidas. Tente novamente.';
      this.successMessage = null;
    }
  }
}
const routes: Routes = [
  { path: 'create', component: CreateNewUserComponent},
  { path: 'forget-password', component: ForgetPasswordComponent}
];