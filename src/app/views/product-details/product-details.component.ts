import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product/product.service';
import { RouterModule } from '@angular/router';
import { ProductModel } from '../../models/product-model/product-model';
import { CartItem } from '../../services/cart/cart.service';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-product-details',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	productId: number = 0;
	product: any; // altere para o tipo do seu produto

	constructor(
		private route: ActivatedRoute,  
		private router: Router,
		private productService: ProductService, 
		private cartService: CartService
	) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.productId = +params['id']; //o '+' converte para número
			this.loadProductDetails(this.productId);
		});
	}

	loadProductDetails(id: number) {
		this.productService.getProductById(id).subscribe(product => {
			this.product = product;
		});
	}

	addToCart(id: number) {
		this.productService.getPackageByProductId(id).subscribe(packageObj => {
			const cartItem: CartItem = {
				id: packageObj.id,
				nome: packageObj.nome,                 
				preco: packageObj.preco,             
				quantidade: 1                   
			};

			this.cartService.addToCart(cartItem);
			this.router.navigate(['/checkout']);
		});
    

	}
}
