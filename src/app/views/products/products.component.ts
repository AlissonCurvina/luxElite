import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductInfoCardComponent } from '../../components/product-info-card/product-info-card.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product-model/product-model';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Inject } from '@angular/core';

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
	  private productService: ProductService // Injete o serviço aqui
	) {
	  this.allProducts = [];
	}
  
	ngOnInit(): void {
		this.productService.getAllProducts().subscribe(
			(data: any[]) => {
			  console.log('Dados recebidos da API:', data);
			  // Converte cada objeto em uma instância de ProductModel
			  this.allProducts = data.map(product => new ProductModel(
				product.id,
				product.nome,
				product.categoria,
				product.descricao,
				product.photos,
				product.preco,
				product.listaPacotes,
				product.marca
			  ));
			  this.filteredProducts = [...this.allProducts]; // Inicializa os produtos filtrados
			  console.log('Produtos no filtro: ', this.filteredProducts)
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
		this.selectedBrands.delete(brand); // Remove a marca se já estiver selecionada
	  } else {
		this.selectedBrands.add(brand); // Adiciona a marca se não estiver selecionada
	  }
	  this.filterProducts(); // Filtra produtos com base nas marcas selecionadas
	}
  
	public toggleCategory(category: string) {
	  if (this.selectedCategories.has(category)) {
		this.selectedCategories.delete(category); // Remove a categoria se já estiver selecionada
	  } else {
		this.selectedCategories.add(category); // Adiciona a categoria se não estiver selecionada
	  }
	  this.filterProducts(); // Filtra produtos com base nas categorias selecionadas
	}
  
	public filterProducts(searchTerm?: string) {
	  this.filteredProducts = this.allProducts.filter(product =>
		(this.selectedBrands.size === 0 || this.selectedBrands.has(product.getBrand())) &&
		(this.selectedCategories.size === 0 || this.selectedCategories.has(product.getCategory())) &&
		(!searchTerm || product.getName().toLowerCase().includes(searchTerm.toLowerCase())) // Filtro pelo termo de busca
	  );
	}
  
	viewProductDetails(productId: number) { // Função para navegar até os detalhes do produto
	  console.log('Navigating to product details for ID:', productId);
	  this.router.navigate(['/product-details', productId]);
	}
}