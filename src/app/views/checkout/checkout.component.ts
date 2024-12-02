import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../services/auth/auth.service';
import { Client } from '../../models/client-model/client';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true, 
  imports: [
    CommonModule, 
    FormsModule,  
  ],
})
export class CheckoutComponent implements OnInit {
  selectedPacks: CartItem[] = [];
  selectedPaymentMethod: string = '';

  constructor(private cartService: CartService, private authService: AuthService) {}

  ngOnInit() {
    this.selectedPacks = this.cartService.getItems();
  }

  finalizePurchase() {
    
    const clientData = sessionStorage.getItem('loggedClientData');

    if (!this.selectedPaymentMethod) {
      alert('Por favor, escolha um método de pagamento!');
      return;
    }
    
    if(clientData) {
      const client = JSON.parse(clientData) as Client;
      const clientAddress = `${client.street_name}, ${client.city}, ${client.state}, ${client.cep}`;


      this.cartService.finalizePurchase().subscribe(
        (response) => {
          alert(`Compra finalizada com sucesso! Número do pedido: ${response.numeroPedido}\nEndereço: ${clientAddress}`);
          this.cartService.clearCart();
          this.selectedPacks = [];
          this.selectedPaymentMethod = '';
        },
        (error) => {
          alert('Erro ao finalizar a compra. Tente novamente.');
          console.error(error);
        }
      );

    } else {
      alert('Você precisa estar logado para finalizar a compra.');
    }
  }

    removeItem(item: CartItem) {
    this.selectedPacks = this.selectedPacks.filter(p => p.id !== item.id);
    this.cartService.clearCart();
    this.selectedPacks.forEach(i => this.cartService.addToCart(i));
  }

  getTotalItems(): number {
    return this.selectedPacks.reduce((total, item) => total + item.quantidade, 0);
  }

  getTotalPrice(): number {
    return this.selectedPacks.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }
  
}
