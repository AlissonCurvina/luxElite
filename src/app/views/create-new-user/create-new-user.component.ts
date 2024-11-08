import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/client-model/client';
import { ClientService } from '../../services/client/client.service';

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
  gravar(){
    this.message = this.service.Inserir(this.obj);
  }
  alterar(){}
  remover(){}
  pesquisar(){}

  // successMessage: string | null = null; //tirar depois ou arrumar
  // errorMessage: string | null = null;

  // onCreate() {

    // if (!this.name || !this.lastname || !this.cpf || !this.cellphone ||
    //   !this.email || !this.password || !this.password2 ||
    //   !this.cep || !this.street_name || !this.state || !this.city) {
    //   this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
    //   this.successMessage = null;
    //   return;
    // }

    // //formato do email
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailPattern.test(this.email)) {
    // this.errorMessage = 'Insira um email válido.';
    // this.successMessage = null;
    // return;
    // }

    // //se as senhas coincidem
    // if (this.password !== this.password2) {
    // this.errorMessage = 'As senhas não coincidem.';
    // this.successMessage = null;
    // return;
    // }

    // //CPF (deve conter 11 dígitos)
    // const cpfPattern = /^\d{11}$/; 
    // if (!cpfPattern.test(this.cpf)) {
    // this.errorMessage = 'O CPF deve conter 11 dígitos.';
    // this.successMessage = null;
    // return;
    // }

    // //telefone (apenas números, tamanho mínimo de 10 dígitos)
    // const phonePattern = /^\d{10,15}$/;
    // if (!phonePattern.test(this.cellphone)) {
    // this.errorMessage = 'O telefone deve conter apenas números e ter entre 10 a 15 dígitos.';
    // this.successMessage = null;
    // return;
    // }

    // //CEP (deve conter 8 dígitos)
    // const cepPattern = /^\d{8}$/; 
    // if (!cepPattern.test(this.cep)) {
    // this.errorMessage = 'O CEP deve conter 8 dígitos.';
    // this.successMessage = null;
    // return;
    // }

    
    // this.successMessage = 'Conta criada com sucesso!';
    // this.errorMessage = null;
    
}
