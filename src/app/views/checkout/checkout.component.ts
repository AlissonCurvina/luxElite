import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

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

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.selectedPacks = this.cartService.getItems();
  }

  finalizePurchase() {
    if (!this.selectedPaymentMethod) {
      alert('Por favor, escolha um método de pagamento!');
      return;
    }

    this.cartService.finalizePurchase().subscribe(
      (response) => {
        alert(`Compra finalizada com sucesso! Número do pedido: ${response.numeroPedido}`);
        this.cartService.clearCart();
        this.selectedPacks = [];
        this.selectedPaymentMethod = '';
      },
      (error) => {
        alert('Erro ao finalizar a compra. Tente novamente.');
        console.error(error);
      }
    );
  }


    removeItem(item: CartItem) {
    this.selectedPacks = this.selectedPacks.filter(p => p.id !== item.id);
    this.cartService.clearCart();
    this.selectedPacks.forEach(i => this.cartService.addToCart(i));
  }


  //calcula o total de itens no carrinho
  getTotalItems(): number {
    return this.selectedPacks.reduce((total, item) => total + item.quantidade, 0);
  }
  //calcula o valor total no carrinho
  getTotalPrice(): number {
    return this.selectedPacks.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }
  
}
