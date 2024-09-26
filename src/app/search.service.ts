import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // Simulação de um conjunto de dados de produtos
  private items = [
    { id: 1, name: 'Produto 1' },
    { id: 2, name: 'Produto 2' },
    { id: 3, name: 'Produto 3' }
  ];

  constructor() {}

  // Função que busca os produtos pelo termo
  searchItems(query: string): Observable<any[]> {
    const results = this.items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    return of(results); // Retorna um Observable com os resultados filtrados
  }
}
