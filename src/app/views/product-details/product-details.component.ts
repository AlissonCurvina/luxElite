import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product/product.service';// Importe seu serviço aqui
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product: any; // altere para o tipo do seu produto

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // O '+' converte para número
      this.loadProductDetails(this.productId);
    });
  }

  loadProductDetails(id: number) {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }

  addToCart(product: any) {
    // lógica para adicionar ao carrinho feita futuramente
  }
}
