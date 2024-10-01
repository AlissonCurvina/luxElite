import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewUserComponent } from '../create-new-user/create-new-user.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  successMessage: string | null = null;

  onLogin() {
    // pegar logica do prof na aula
    // aqui você pode adicionar lógica para autenticar o usuário
    this.successMessage = 'Login efetuado com sucesso!';
  }

}

const routes: Routes = [
  { path: 'create', component: CreateNewUserComponent},
  { path: 'forget-password', component: ForgetPasswordComponent}
];