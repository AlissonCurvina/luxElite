import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductInfoCardComponent } from '../../components/product-info-card/product-info-card.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product-model';
import { Router } from '@angular/router';

const mockProducts = [
	{
		id: 1,
		name: 'Chanel Black',
		category: 'Bolsas',
		description: 'Bolsa Chanel preta básica.',
		photos: ['assets/chanel_black.jpg'],
		price: 400,
		includedInPackages: ['Básico'],
		brand: 'Chanel'
	},
	{
		id: 2,
		name: 'Chanel Red',
		category: 'Bolsas',
		description: 'Bolsa Chanel vermelha.',
		photos: ['assets/chanel_red.jpg'],
		price: 200,
		includedInPackages: ['Diamante'],
		brand: 'Chanel'
	},
	{
		id: 3,
		name: 'Chanel Blue',
		category: 'Bolsas',
		description: 'Bolsa Chanel azul premium.',
		photos: ['assets/chanel_blue.jpg'],
		price: 500,
		includedInPackages: ['Premium'],
		brand: 'Chanel'
	},
	{
		id: 4,
		name: 'LV White',
		category: 'Bolsas',
		description: 'Bolsa Louis Vuitton branca LuxElite.',
		photos: ['assets/lv_white.jpg'],
		price: 100,
		includedInPackages: ['LuxElite'],
		brand: 'Louis Vuitton'
	},
	{
		id: 5,
		name: 'LV Black',
		category: 'Bolsas',
		description: 'Bolsa Louis Vuitton preta básica.',
		photos: ['assets/lv_black.jpg'],
		price: 400,
		includedInPackages: ['Básico'],
		brand: 'Louis Vuitton'
	},
	{
		id: 6,
		name: 'LV Brown',
		category: 'Bolsas',
		description: 'Bolsa Louis Vuitton marrom Elegance.',
		photos: ['assets/lv_brown.jpg'],
		price: 200,
		includedInPackages: ['Elegance'],
		brand: 'Louis Vuitton'
	},
	{
		id: 7,
		name: 'Gucci T-Shirt',
		category: 'Roupas',
		description: 'Camiseta Gucci clássica.',
		photos: ['assets/gucci_tshirt.jpg'],
		price: 150,
		includedInPackages: ['Básico'],
		brand: 'Gucci'
	},
	{
		id: 8,
		name: 'Gucci Jacket',
		category: 'Roupas',
		description: 'Jaqueta de couro Gucci.',
		photos: ['assets/gucci_jacket.jpg'],
		price: 500,
		includedInPackages: ['Premium'],
		brand: 'Gucci'
	},
	{
		id: 9,
		name: 'Gucci Dress',
		category: 'Roupas',
		description: 'Vestido elegante Gucci.',
		photos: ['assets/gucci_dress.jpg'],
		price: 300,
		includedInPackages: ['Lux Elite'],
		brand: 'Gucci'
	},
	{
		id: 10,
		name: 'Prada Shirt',
		category: 'Roupas',
		description: 'Camisa formal Prada.',
		photos: ['assets/prada_shirt.jpg'],
		price: 200,
		includedInPackages: ['Elegance'],
		brand: 'Prada'
	},
	{
		id: 11,
		name: 'Prada Skirt',
		category: 'Roupas',
		description: 'Saia de designer Prada.',
		photos: ['assets/prada_skirt.jpg'],
		price: 250,
		includedInPackages: ['Lux Elite'],
		brand: 'Prada'
	},
	{
		id: 12,
		name: 'Prada Coat',
		category: 'Roupas',
		description: 'Casaco sofisticado Prada.',
		photos: ['assets/prada_coat.jpg'],
		price: 450,
		includedInPackages: ['Premium'],
		brand: 'Prada'
	},
	{
		id: 13,
		name: 'Golden Retriever',
		category: 'Pets',
		description: 'Golden Retriever com pedigree.',
		photos: ['assets/golden_retriever.jpg'],
		price: 50,
		includedInPackages: ['Básico'],
		brand: 'Golden'
	},
	{
		id: 14,
		name: 'Bulldog Francês',
		category: 'Pets',
		description: 'Bulldog Francês com estilo.',
		photos: ['assets/bulldog_frances.jpg'],
		price: 70,
		includedInPackages: ['Premium'],
		brand: 'Bulldog'
	},
	{
		id: 15,
		name: 'Poodle',
		category: 'Pets',
		description: 'Poodle de show.',
		photos: ['assets/poodle.jpg'],
		price: 60,
		includedInPackages: ['Elegance'],
		brand: 'Poodle'
	},
	{
		id: 16,
		name: 'Persa',
		category: 'Pets',
		description: 'Gato Persa com pedigree.',
		photos: ['assets/gato_persa.jpg'],
		price: 40,
		includedInPackages: ['Básico'],
		brand: 'Persa'
	},
	{
		id: 17,
		name: 'Maine Coon',
		category: 'Pets',
		description: 'Maine Coon gigante e elegante.',
		photos: ['assets/maine_coon.jpg'],
		price: 50,
		includedInPackages: ['Premium'],
		brand: 'Maine Coon'
	},
	{
		id: 18,
		name: 'Siamês',
		category: 'Pets',
		description: 'Gato Siamês sofisticado.',
		photos: ['assets/gato_siamese.jpg'],
		price: 45,
		includedInPackages: ['Elegance'],
		brand: 'Siamês'
	},
	{
		id: 19,
		name: 'Porsche 911',
		category: 'Carros',
		description: 'Porsche 911 Turbo.',
		photos: ['assets/porsche_911.jpg'],
		price: 300,
		includedInPackages: ['Diamante'],
		brand: 'Porsche'
	},
	{
		id: 20,
		name: 'Ferrari F8',
		category: 'Carros',
		description: 'Ferrari F8 Tributo.',
		photos: ['assets/ferrari_f8.jpg'],
		price: 350,
		includedInPackages: ['Elegance'],
		brand: 'Ferrari'
	},
	{
		id: 21,
		name: 'Mercedes-Benz S-Class',
		category: 'Carros',
		description: 'Mercedes-Benz S-Class Luxury.',
		photos: ['assets/mercedes_s_class.jpg'],
		price: 250,
		includedInPackages: ['Premium'],
		brand: 'Mercedes Benz'
	},
	{
		id: 22,
		name: 'Porsche Cayenne',
		category: 'Carros',
		description: 'Porsche Cayenne SUV.',
		photos: ['assets/porsche_cayenne.jpg'],
		price: 500,
		includedInPackages: ['Diamante'],
		brand: 'Porsche'
	},
	{
		id: 23,
		name: 'Ferrari 488',
		category: 'Carros',
		description: 'Ferrari 488 Spider.',
		photos: ['assets/ferrari_488.jpg'],
		price: 489,
		includedInPackages: ['Elegance'],
		brand: 'Ferrari'
	},
	{
		id: 24,
		name: 'Mercedes-Benz G-Class',
		category: 'Carros',
		description: 'Mercedes-Benz G-Class Off-Road.',
		photos: ['assets/mercedes_g_class.jpg'],
		price: 600,
		includedInPackages: ['Premium'],
		brand: 'Mercedes-Benz'
	},
	{
		id: 25,
		name: 'Anel Cartier Love',
		category: 'Joias',
		description: 'Anel Cartier Love em ouro amarelo.',
		photos: ['assets/anel_cartier_love.jpg'],
		price: 100,
		includedInPackages: ['Básico'],
		brand: 'Cartier'
	},
	{
		id: 26,
		name: 'Colar Bulgari Serpenti',
		category: 'Joias',
		description: 'Colar Bulgari Serpenti em ouro rosa.',
		photos: ['assets/colar_bulgari_serpenti.jpg'],
		price: 150,
		includedInPackages: ['Premium'],
		brand: 'Bulgari'
	},
	{
		id: 27,
		name: 'Pulseira Chapard',
		category: 'Joias',
		description: 'Pulseira Chapard de diamantes.',
		photos: ['assets/pulseira_chapard.jpg'],
		price: 120,
		includedInPackages: ['Básico'],
		brand: 'Chapard'
	},
	{
		id: 28,
		name: 'Brinco Cartier Panthère',
		category: 'Joias',
		description: 'Brinco Cartier Panthère em ouro branco.',
		photos: ['assets/brinco_cartier_panthere.jpg'],
		price: 200,
		includedInPackages: ['Premium'],
		brand: 'Cartier'
	},
	{
		id: 30,
		name: 'Anel Bulgari B.zero1',
		category: 'Joias',
		description: 'Anel Bulgari B.zero1 em cerâmica.',
		photos: ['assets/anel_bulgari_bzero1.jpg'],
		price: 800,
		includedInPackages: ['Básico'],
		brand: 'Bulgari'
	},
	{
		id: 31,
		name: 'Colar Chapard Vintage',
		category: 'Joias',
		description: 'Colar Chapard Vintage com safiras.',
		photos: ['assets/colar_chapard_vintage.jpg'],
		price: 170,
		includedInPackages: ['Premium'],
		brand: 'Chapard'
	},
	{
		id: 32,
		name: 'Herdeiro',
		category: 'Backstory',
		description: 'A história de um jovem herdeiro de uma grande fortuna.',
		photos: ['assets/herdeiro.jpg'],
		price: 800,
		includedInPackages: ['Elegance'],
		brand: 'Luxo'
	},
	{
		id: 33,
		name: 'Empreendedor',
		category: 'Backstory',
		description: 'A trajetória inspiradora de um empreendedor de sucesso.',
		photos: ['assets/empreendedor.jpg'],
		price: 600,
		includedInPackages: ['Lux Elite'],
		brand: 'Luxo'
	},
	{
		id: 34,
		name: 'Investidor',
		category: 'Backstory',
		description: 'A vida de um investidor astuto em busca das melhores oportunidades.',
		photos: ['assets/investidor.jpg'],
		price: 700,
		includedInPackages: ['Diamante'],
		brand: 'Luxo'
	}

];

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

	public availableBrands: string[] = ['Prada', 'Gucci', 'Louis Vuitton', 'Golden', 'Bulldog',
		'Poodle', 'Persa', 'Maine Coon', 'Siamês', 'Porsche', 'Ferrari', 'Mercedes-Benz', 'Cartier', 'Bulgari',
	   'Chapard'];
   	
	public availableCategories: string[] = ['Bolsas', 'Roupas', 'Carros', 'Pets', 'Backstory', 'Joias']; 

	constructor(private route: ActivatedRoute, private router: Router) {
		this.allProducts = [];

		mockProducts.forEach(product => (
			this.allProducts.push((new ProductModel(
				product.id,
				product.name,
				product.category,
				product.description,
				product.photos,
				product.price,
				product.includedInPackages,
				product.brand
			)))
		))
	}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			const searchTerm = params['search'];
			this.filterProducts(searchTerm); // Chama o filtro com o termo de busca
		});
		this.filterProducts(); // Para filtrar por marcas e categorias
	}

	public toggleBrand(brand: string) {
		if (this.selectedBrands.has(brand)) {
			this.selectedBrands.delete(brand); //remove a marca se já estiver selecionada
		} else {
			this.selectedBrands.add(brand); //adiciona a marca se não estiver selecionada
		}
		this.filterProducts(); //filtra produtos com base nas marcas selecionadas
	}

	public toggleCategory(category: string) {
		if (this.selectedCategories.has(category)) {
			this.selectedCategories.delete(category); //remove a categoria se já estiver selecionada
		} else {
			this.selectedCategories.add(category); //adiciona a categoria se não estiver selecionada
		}
		this.filterProducts(); //filtra produtos com base nas categorias selecionadas
	}

	public filterProducts(searchTerm?: string) {
		this.filteredProducts = this.allProducts.filter(product =>
			(this.selectedBrands.size === 0 || this.selectedBrands.has(product.getBrand())) &&
			(this.selectedCategories.size === 0 || this.selectedCategories.has(product.getCategory())) &&
			(!searchTerm || product.getName().toLowerCase().includes(searchTerm.toLowerCase())) // Filtro pelo termo de busca
		);
	}

	viewProductDetails(productId: number) { //essa faz parte da logica pra detalhes
		console.log('Navigating to product details for ID:', productId);
		this.router.navigate(['/product-details', productId]);
	}
}