import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewUserComponent } from '../create-new-user/create-new-user.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

const routes: Routes = [
  { path: 'create', component: CreateNewUserComponent},
  { path: 'forget-password', component: ForgetPasswordComponent}
];