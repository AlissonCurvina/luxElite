import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgFor } from '@angular/common';
import { ProductInfoCardComponent } from '../../components/product-info-card/product-info-card.component';


@Component({
	selector: 'app-products',
	standalone: true,
	imports: [ProductInfoCardComponent, CommonModule, NgForOf, NgFor],
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent {
	public bolsasDeLuxo: any[] = [
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
		  description: 'Bolsa Chanel vermelha de diamante.',
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
	];

	public roupasDeLuxo: any[] = [
		{
			id: 1,
			name: 'Gucci T-Shirt',
			category: 'Roupas',
			description: 'Camiseta Gucci clássica.',
			photos: ['assets/gucci_tshirt.jpg'],
			price: 150,
			includedInPackages: ['Standard'],
			brand: 'Gucci'
		},
		{
			id: 2,
			name: 'Gucci Jacket',
			category: 'Roupas',
			description: 'Jaqueta de couro Gucci.',
			photos: ['assets/gucci_jacket.jpg'],
			price: 500,
			includedInPackages: ['Premium'],
			brand: 'Gucci'
		},
		{
			id: 3,
			name: 'Gucci Dress',
			category: 'Roupas',
			description: 'Vestido elegante Gucci.',
			photos: ['assets/gucci_dress.jpg'],
			price: 300,
			includedInPackages: ['Luxury'],
			brand: 'Gucci'
		},
		{
			id: 4,
			name: 'Prada Shirt',
			category: 'Roupas',
			description: 'Camisa formal Prada.',
			photos: ['assets/prada_shirt.jpg'],
			price: 200,
			includedInPackages: ['Standard'],
			brand: 'Prada'
		},
		{
			id: 5,
			name: 'Prada Skirt',
			category: 'Roupas',
			description: 'Saia de designer Prada.',
			photos: ['assets/prada_skirt.jpg'],
			price: 250,
			includedInPackages: ['Luxury'],
			brand: 'Prada'
		},
		{
			id: 6,
			name: 'Prada Coat',
			category: 'Roupas',
			description: 'Casaco sofisticado Prada.',
			photos: ['assets/prada_coat.jpg'],
			price: 450,
			includedInPackages: ['Premium'],
			brand: 'Prada'
		},
	];

	public petsDeLuxo: any[] = [
		{
			id: 1,
			name: 'Golden Retriever',
			category: 'Pets',
			description: 'Golden Retriever com pedigree.',
			photos: ['assets/golden_retriever.jpg'],
			price: 50,
			includedInPackages: ['Básico'],
			brand: 'Luxo Pets'
		},
		{
			id: 2,
			name: 'Bulldog Francês',
			category: 'Pets',
			description: 'Bulldog Francês com estilo.',
			photos: ['assets/bulldog_frances.jpg'],
			price: 70,
			includedInPackages: ['Premium'],
			brand: 'Luxo Pets'
		},
		{
			id: 3,
			name: 'Poodle',
			category: 'Pets',
			description: 'Poodle de show.',
			photos: ['assets/poodle.jpg'],
			price: 60,
			includedInPackages: ['Elegance'],
			brand: 'Luxo Pets'
		},
		{
			id: 4,
			name: 'Persa',
			category: 'Pets',
			description: 'Gato Persa com pedigree.',
			photos: ['assets/gato_persa.jpg'],
			price: 40,
			includedInPackages: ['Básico'],
			brand: 'Luxo Pets'
		},
		{
			id: 5,
			name: 'Maine Coon',
			category: 'Pets',
			description: 'Maine Coon gigante e elegante.',
			photos: ['assets/maine_coon.jpg'],
			price: 50,
			includedInPackages: ['Premium'],
			brand: 'Luxo Pets'
		},
		{
			id: 6,
			name: 'Siamês',
			category: 'Pets',
			description: 'Gato Siamês sofisticado.',
			photos: ['assets/gato_siamese.jpg'],
			price: 45,
			includedInPackages: ['Elegance'],
			brand: 'Luxo Pets'
		},
	];

	public carrosDeLuxo: any[] = [
		{
			id: 1,
			name: 'Porsche 911',
			category: 'Carros',
			description: 'Porsche 911 Turbo.',
			photos: ['assets/porsche_911.jpg'],
			price: 300,
			includedInPackages: ['Diamante'],
			brand: 'Porsche'
		},
		{
			id: 2,
			name: 'Ferrari F8',
			category: 'Carros',
			description: 'Ferrari F8 Tributo.',
			photos: ['assets/ferrari_f8.jpg'],
			price: 350,
			includedInPackages: ['Elegance'],
			brand: 'Ferrari'
		},
		{
			id: 3,
			name: 'Mercedes-Benz S-Class',
			category: 'Carros',
			description: 'Mercedes-Benz S-Class Luxury.',
			photos: ['assets/mercedes_s_class.jpg'],
			price: 250,
			includedInPackages: ['Premium'],
			brand: 'Mercedes-Benz'
		},
		{
			id: 4,
			name: 'Porsche Cayenne',
			category: 'Carros',
			description: 'Porsche Cayenne SUV.',
			photos: ['assets/porsche_cayenne.jpg'],
			price: 500,
			includedInPackages: ['Diamante'],
			brand: 'Porsche'
		},
		{
			id: 5,
			name: 'Ferrari 488',
			category: 'Carros',
			description: 'Ferrari 488 Spider.',
			photos: ['assets/ferrari_488.jpg'],
			price: 489,
			includedInPackages: ['Elegance'],
			brand: 'Ferrari'
		},
		{
			id: 6,
			name: 'Mercedes-Benz G-Class',
			category: 'Carros',
			description: 'Mercedes-Benz G-Class Off-Road.',
			photos: ['assets/mercedes_g_class.jpg'],
			price: 600,
			includedInPackages: ['Premium'],
			brand: 'Mercedes-Benz'
		},
	];

	public joiasDeLuxo: any[] = [
		{
			id: 1,
			name: 'Anel Cartier Love',
			category: 'Joias',
			description: 'Anel Cartier Love em ouro amarelo.',
			photos: ['assets/anel_cartier_love.jpg'],
			price: 100,
			includedInPackages: ['Básico'],
			brand: 'Cartier'
		},
		{
			id: 2,
			name: 'Colar Bulgari Serpenti',
			category: 'Joias',
			description: 'Colar Bulgari Serpenti em ouro rosa.',
			photos: ['assets/colar_bulgari_serpenti.jpg'],
			price: 150,
			includedInPackages: ['Premium'],
			brand: 'Bulgari'
		},
		{
			id: 3,
			name: 'Pulseira Chapard',
			category: 'Joias',
			description: 'Pulseira Chapard de diamantes.',
			photos: ['assets/pulseira_chapard.jpg'],
			price: 120,
			includedInPackages: ['Básico'],
			brand: 'Chapard'
		},
		{
			id: 4,
			name: 'Brinco Cartier Panthère',
			category: 'Joias',
			description: 'Brinco Cartier Panthère em ouro branco.',
			photos: ['assets/brinco_cartier_panthere.jpg'],
			price: 200,
			includedInPackages: ['Premium'],
			brand: 'Cartier'
		},
		{
			id: 5,
			name: 'Anel Bulgari B.zero1',
			category: 'Joias',
			description: 'Anel Bulgari B.zero1 em cerâmica.',
			photos: ['assets/anel_bulgari_bzero1.jpg'],
			price: 800,
			includedInPackages: ['Básico'],
			brand: 'Bulgari'
		},
		{
			id: 6,
			name: 'Colar Chapard Vintage',
			category: 'Joias',
			description: 'Colar Chapard Vintage com safiras.',
			photos: ['assets/colar_chapard_vintage.jpg'],
			price: 170,
			includedInPackages: ['Premium'],
			brand: 'Chapard'
		},
	];

	public backstory: any[] = [
		{
			id: 1,
			name: 'Herdeiro',
			category: 'Backstory',
			description: 'A história de um jovem herdeiro de uma grande fortuna.',
			photos: ['assets/herdeiro.jpg'],
			price: 800,
			includedInPackages: ['Elegance'],
			brand: 'Luxo'
		},
		{
			id: 2,
			name: 'Empreendedor',
			category: 'Backstory',
			description: 'A trajetória inspiradora de um empreendedor de sucesso.',
			photos: ['assets/empreendedor.jpg'],
			price: 600,
			includedInPackages: ['Lux Elite'],
			brand: 'Luxo'
		},
		{
			id: 3,
			name: 'Investidor',
			category: 'Backstory',
			description: 'A vida de um investidor astuto em busca das melhores oportunidades.',
			photos: ['assets/investidor.jpg'],
			price: 700,
			includedInPackages: ['Diamante'],
			brand: 'Luxo'
		}
	];

}