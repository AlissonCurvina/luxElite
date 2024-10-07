import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    selectedPacks: CartItem[] = []; //usar um array para múltiplos itens
    selectedPaymentMethod: string = ''; //armazena o método de pagamento selecionado

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.selectedPacks = this.cartService.getItems(); //recupera os itens do carrinho
    }

    removeItem(item: CartItem) {
        // Remove o item do carrinho
        this.selectedPacks = this.selectedPacks.filter(i => i !== item);
        this.cartService.clearCart(); //limpa o carrinho
        this.selectedPacks.forEach(i => this.cartService.addToCart(i)); //re-adiciona os itens restantes ao carrinho
    }

    finalizePurchase() {
        if (!this.selectedPaymentMethod) {
            alert('Por favor, escolha um método de pagamento!');
            return;
        }
        
        //lógica para finalizar a compra
        alert(`Compra finalizada com sucesso via ${this.selectedPaymentMethod}!`); //exibe o método de pagamento
        this.cartService.clearCart(); //limpa o carrinho após a compra
        this.selectedPacks = []; //limpa a lista de itens exibidos
        this.selectedPaymentMethod = ''; //reseta o método de pagamento
    }
}
