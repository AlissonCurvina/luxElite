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

    // função para calcular a quantidade total de itens
    getTotalItems(): number {
        return this.selectedPacks.reduce((total, item) => total + item.quantity, 0); // soma a quantidade de todos os itens
    }

    // função para calcular o preço total dos itens
    getTotalPrice(): number {
        return this.selectedPacks.reduce((total, item) => total + (item.price * item.quantity), 0); // soma o preço total
    }

    removeItem(item: CartItem) {
        this.selectedPacks = this.selectedPacks.filter(i => i.id !== item.id); // remove o item do carrinho
        this.cartService.clearCart(); // limpa o carrinho
        this.selectedPacks.forEach(i => this.cartService.addToCart(i)); // re-adiciona os itens restantes ao carrinho
    }

    finalizePurchase() {
        if (!this.selectedPaymentMethod) {
            alert('Por favor, escolha um método de pagamento!');
            return;
        }

        // lógica para finalizar a compra
        alert(`Compra finalizada com sucesso via ${this.selectedPaymentMethod}!`); // exibe o método de pagamento
        this.cartService.clearCart(); // limpa o carrinho após a compra
        this.selectedPacks = []; // limpa a lista de itens exibidos
        this.selectedPaymentMethod = ''; // reseta o método de pagamento
    }
}
