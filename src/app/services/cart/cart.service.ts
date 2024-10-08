import { Injectable } from '@angular/core';

export interface CartItem {
  id: number; 
  title: string;
  price: number;
  quantity: number; //adicionando a quantidade
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(item: CartItem) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity; //aumenta a quantidade se o item já existir
    } else {
      this.items.push(item);
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
