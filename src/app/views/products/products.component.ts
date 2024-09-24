import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgFor } from '@angular/common';
import { ProductInfoCardComponent } from '../../components/product-info-card/product-info-card.component';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [ProductInfoCardComponent, CommonModule, NgForOf, NgFor],
	templateUrl: './products.component.html',
	styleUrl: './products.component.css'
})
export class ProductsComponent {
	public productsList: any[] = [
		{
			id: 1,
			name: 'Gato Siamês',
			category: 'animais',
			description: 'Um gato de raça siamês com pedigree, famoso pela sua aparência elegante e personalidade carinhosa.',
			photos: ['gato1.jpg', 'gato2.jpg'],
			price: 1200,
			includedInPackages: ['premium', 'luxelite'],
			brand: 'Royal Breeds'
		},
		{
			id: 2,
			name: 'Anel de Diamante',
			category: 'joias',
			description: 'Anel com diamante lapidado, uma peça exclusiva para ocasiões especiais.',
			photos: ['anel1.jpg', 'anel2.jpg'],
			price: 7500,
			includedInPackages: ['diamante', 'luxelite', 'elegance'],
			brand: 'Tiffany & Co.'
		},
		{
			id: 3,
			name: 'Ferrari F8 Tributo',
			category: 'carros',
			description: 'Superesportivo italiano com motor V8, perfeito para entusiastas de alta performance.',
			photos: ['ferrari1.jpg', 'ferrari2.jpg'],
			price: 300000,
			includedInPackages: ['premium', 'diamante', 'luxelite'],
			brand: 'Ferrari'
		},
		{
			id: 4,
			name: 'Jaqueta de Couro',
			category: 'roupas',
			description: 'Jaqueta de couro legítimo, ideal para dias frios com estilo.',
			photos: ['jaqueta1.jpg', 'jaqueta2.jpg'],
			price: 300000,
			includedInPackages: ['básico', 'premium'],
			brand: 'Levi\'s'
		},
		{
			id: 5,
			name: 'Bolsa Chanel',
			category: 'bolsas',
			description: 'Bolsa de luxo Chanel, confeccionada em couro de alta qualidade com design atemporal.',
			photos: ['bolsa1.jpg', 'bolsa2.jpg'],
			price: 10000,
			includedInPackages: ['luxelite', 'elegance', 'premium'],
			brand: 'Chanel'
		},
		
		// Mais 15 produtos
		{
			id: 6,
			name: 'Labrador Retriever',
			category: 'animais',
			description: 'Cachorro da raça Labrador, conhecido por sua lealdade e inteligência.',
			photos: ['labrador1.jpg', 'labrador2.jpg'],
			price: 1500,
			includedInPackages: ['básico', 'premium'],
			brand: 'Paws Breeders'
		},
		{
			id: 7,
			name: 'Colar de Pérolas',
			category: 'joias',
			description: 'Colar de pérolas cultivadas, ideal para eventos formais.',
			photos: ['colar1.jpg', 'colar2.jpg'],
			price: 2500,
			includedInPackages: ['luxelite', 'elegance'],
			brand: 'Mikimoto'
		},
		{
			id: 8,
			name: 'Tesla Model S',
			category: 'carros',
			description: 'Carro elétrico de alta performance com tecnologia de ponta.',
			photos: ['tesla1.jpg', 'tesla2.jpg'],
			price: 120000,
			includedInPackages: ['diamante', 'premium'],
			brand: 'Tesla'
		},
		{
			id: 9,
			name: 'Camisa Social',
			category: 'roupas',
			description: 'Camisa social de algodão, ideal para o trabalho e ocasiões formais.',
			photos: ['camisa1.jpg', 'camisa2.jpg'],
			price: 100,
			includedInPackages: ['básico', 'premium'],
			brand: 'Zara'
		},
		{
			id: 10,
			name: 'Bolsa de Couro Italiana',
			category: 'bolsas',
			description: 'Bolsa artesanal de couro italiano, com detalhes exclusivos.',
			photos: ['bolsa_italiana1.jpg', 'bolsa_italiana2.jpg'],
			price: 800,
			includedInPackages: ['básico', 'luxelite'],
			brand: 'Gucci'
		},
		{
			id: 11,
			name: 'Pastor Alemão',
			category: 'animais',
			description: 'Cão da raça Pastor Alemão, reconhecido por sua inteligência e versatilidade.',
			photos: ['pastor1.jpg', 'pastor2.jpg'],
			price: 1500,
			includedInPackages: ['premium', 'luxelite'],
			brand: 'Guardians Breeders'
		},
		{
			id: 12,
			name: 'Brinco de Ouro',
			category: 'joias',
			description: 'Brinco de ouro 18k com design minimalista e elegante.',
			photos: ['brinco1.jpg', 'brinco2.jpg'],
			price: 1000,
			includedInPackages: ['básico', 'premium'],
			brand: 'Cartier'
		},
		{
			id: 13,
			name: 'Porsche 911 Carrera',
			category: 'carros',
			description: 'Carro esportivo clássico com motor de alto desempenho.',
			photos: ['porsche1.jpg', 'porsche2.jpg'],
			price: 150000,
			includedInPackages: ['premium', 'diamante'],
			brand: 'Porsche'
		},
		{
			id: 14,
			name: 'Calça Jeans Slim',
			category: 'roupas',
			description: 'Calça jeans de modelagem slim, confortável e estilosa.',
			photos: ['calca1.jpg', 'calca2.jpg'],
			price: 150,
			includedInPackages: ['básico', 'premium'],
			brand: 'Diesel'
		},
		{
			id: 15,
			name: 'Mochila de Viagem',
			category: 'bolsas',
			description: 'Mochila espaçosa e resistente, ideal para longas viagens.',
			photos: ['mochila1.jpg', 'mochila2.jpg'],
			price: 350,
			includedInPackages: ['básico', 'premium'],
			brand: 'Samsonite'
		},
		{
			id: 16,
			name: 'Poodle Toy',
			category: 'animais',
			description: 'Cãozinho da raça Poodle Toy, conhecido por sua fofura e energia.',
			photos: ['poodle1.jpg', 'poodle2.jpg'],
			price: 1200,
			includedInPackages: ['básico', 'luxelite'],
			brand: 'Tiny Paws'
		},
		{
			id: 17,
			name: 'Pulseira de Ouro',
			category: 'joias',
			description: 'Pulseira delicada de ouro 18k, com acabamento detalhado.',
			photos: ['pulseira1.jpg', 'pulseira2.jpg'],
			price: 1500,
			includedInPackages: ['básico', 'premium'],
			brand: 'Pandora'
		},
		{
			id: 18,
			name: 'Lamborghini Aventador',
			category: 'carros',
			description: 'Carro superesportivo com motor V12 e design aerodinâmico.',
			photos: ['lamborghini1.jpg', 'lamborghini2.jpg'],
			price: 500000,
			includedInPackages: ['diamante', 'luxelite'],
			brand: 'Lamborghini'
		},
		{
			id: 19,
			name: 'Vestido de Festa',
			category: 'roupas',
			description: 'Vestido longo de festa, ideal para eventos formais e casamentos.',
			photos: ['vestido1.jpg', 'vestido2.jpg'],
			price: 600,
			includedInPackages: ['luxelite', 'elegance'],
			brand: 'Elie Saab'
		},
		{
			id: 20,
			name: 'Bolsa Tote',
			category: 'bolsas',
			description: 'Bolsa tote espaçosa e versátil, perfeita para o dia a dia.',
			photos: ['tote1.jpg', 'tote2.jpg'],
			price: 250,
			includedInPackages: ['básico', 'premium'],
			brand: 'Longchamp'
		}
	]
}
