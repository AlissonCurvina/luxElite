import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../../models/product-model/product-model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'http://localhost:8081/api/produto'; 

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductModel[]> {

    return this.http.get<ProductModel[]>("http://localhost:8081/api/produtos/"); 
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}`);
  }

  getPackageByProductId(productId: number): Observable<{ id: number; nome: string; preco: number }> {
    return this.http.get<{ id: number; nome: string; preco: number }>(`${this.apiUrl}/${productId}/pacote-ids`);
  }
}
