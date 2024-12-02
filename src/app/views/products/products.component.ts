import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductInfoCardComponent } from '../../components/product-info-card/product-info-card.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product-model/product-model';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [ProductInfoCardComponent, CommonModule, NgFor, FormsModule],
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	public selectedBrands: Set<string> = new Set();
	public selectedCategories: Set<string> = new Set();
	public filteredProducts: Array<ProductModel> = new Array();
	private allProducts: Array<ProductModel> = new Array();
  
	public availableBrands: string[] = ['Prada', 'Gucci', 'Louis Vuitton', 'Golden', 'Bulldog', 'Poodle', 'Persa', 'Maine Coon', 'Siamês', 'Porsche', 'Ferrari', 'Mercedes-Benz', 'Cartier', 'Bulgari', 'Chapard'];
	public availableCategories: string[] = ['Bolsas', 'Roupas', 'Carros', 'Pets', 'Backstory', 'Joias'];
  
	constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private productService: ProductService 
	) {
	  this.allProducts = [];
	}
  
	ngOnInit(): void {
		this.productService.getAllProducts().subscribe(
			(data: any[]) => {
		
			  this.allProducts = data.map(product => new ProductModel(
				product.id,
				product.nome,
				product.categoria,
				product.descricao,
				product.foto_url,
				product.preco,
				product.listaPacotes,
				product.marca
			  ));
			  this.filteredProducts = [...this.allProducts]; 
			},
			(error) => {
			  console.error('Erro ao carregar produtos:', error);
			}
		  );
		
		  this.route.queryParams.subscribe(params => {
			const searchTerm = params['search'];
			this.filterProducts(searchTerm);
		  });
	}
  
	public toggleBrand(brand: string) {
	  if (this.selectedBrands.has(brand)) {
		this.selectedBrands.delete(brand);
	  } else {
		this.selectedBrands.add(brand);
	  }
	  this.filterProducts();
	}
  
	public toggleCategory(category: string) {
	  if (this.selectedCategories.has(category)) {
		this.selectedCategories.delete(category); 
	  } else {
		this.selectedCategories.add(category); 
	  }
	  this.filterProducts(); 
	}
  
	public filterProducts(searchTerm?: string) {
	  this.filteredProducts = this.allProducts.filter(product =>
		(this.selectedBrands.size === 0 || this.selectedBrands.has(product.getBrand())) &&
		(this.selectedCategories.size === 0 || this.selectedCategories.has(product.getCategory())) &&
		(!searchTerm || product.getName().toLowerCase().includes(searchTerm.toLowerCase())) 
	  );
	}
  
	viewProductDetails(productId: number) { 
	  console.log('Navigating to product details for ID:', productId);
	  this.router.navigate(['/product-details', productId]);
	}
}