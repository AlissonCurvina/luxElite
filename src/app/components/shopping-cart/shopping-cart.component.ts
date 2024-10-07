import { Component } from '@angular/core';
import { ShoppingCart } from '../../models/shopping-cart/shopping-cart';
import { ProductModel } from '../../models/product-model/product-model';

import { NgFor } from '@angular/common';

@Component({
	selector: 'app-shopping-cart',
	standalone: true,
	imports: [NgFor],
	templateUrl: './shopping-cart.component.html',
	styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
	public mensagem: string = "";
	public cesta: ShoppingCart = new ShoppingCart();

	constructor() {
		let json = localStorage.getItem("cesta");
		if (json != null) {
			this.cesta = JSON.parse(json);
		} else {
			this.mensagem = "Cesta vazia, adicione novos produtos!";
		}
	}


	public removerItem(obj: ProductModel) {
		this.cesta.produtos = this.cesta.produtos.filter(item => item != obj);
		this.cesta.total = 0; //ATUALIZA O VALOR TOTAL DA CESTA
		for (let i = 0; i < this.cesta.produtos.length; i++) {
			this.cesta.total = this.cesta.produtos[i].getPrice() + this.cesta.total;
		}
		console.log(this.cesta);
		localStorage.setItem("cesta", JSON.stringify(this.cesta));
	}

	public limparCesta() {
		localStorage.removeItem("cesta");
		this.cesta = new ShoppingCart();
		this.mensagem = "Cesta vazia, adicione novos produtos!";
	}
}
