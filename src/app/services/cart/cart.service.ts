import { Injectable } from '@angular/core';

export interface CartItem {
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(item: CartItem) {
    this.items.push(item);
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
