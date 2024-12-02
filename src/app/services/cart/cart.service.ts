import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartItem {
  id: number;
  nome: string;      
  preco: number;     
  quantidade: number; 
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];
  private apiUrl = 'http://localhost:8081/api/cesta';

  constructor(private http: HttpClient) {}

  addToCart(item: CartItem) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantidade += item.quantidade; 
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

  finalizePurchase(): Observable<any> {
    const cesta = {
      itens: this.items.map(item => ({
        id: item.id,
        nome: item.nome,  
        preço: item.preco, 
        quantidade: item.quantidade, 
      })),
      valorTotal: this.getTotalPrice(), 
    };

    return this.http.post(`${this.apiUrl}/finalizar-compra`, cesta);
  }

  private getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.preco * item.quantidade, 0); 
  }
}
