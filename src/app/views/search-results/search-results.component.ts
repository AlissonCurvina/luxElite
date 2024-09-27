import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoCardComponent } from '../../components/product-info-card/product-info-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, ProductInfoCardComponent, FormsModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public selectedBrands: Set<string> = new Set(); // Para armazenar marcas selecionadas
  public selectedCategories: Set<string> = new Set(); // Para armazenar categorias selecionadas
  public filteredProducts: any[] = [];
  public allProducts: any[] = []; // Armazenar todos os produtos
  public availableBrands: string[] = ['Prada', 'Gucci']; // Marcas disponíveis
  public availableCategories: string[] = ['Bolsas', 'Roupas']; // Categorias disponíveis

  constructor() {
    // Inicializando produtos de exemplo
    this.allProducts = [
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
        name: 'Prada Dress',
        category: 'Roupas',
        description: 'Vestido da Prada elegante.',
        photos: ['assets/prada_dress.jpg'],
        price: 600,
        includedInPackages: ['Premium'],
        brand: 'Prada'
      },
      {
        id: 4,
        name: 'Gucci Handbag',
        category: 'Bolsas',
        description: 'Bolsa de mão Gucci sofisticada.',
        photos: ['assets/gucci_handbag.jpg'],
        price: 450,
        includedInPackages: ['Luxo'],
        brand: 'Gucci'
      }
      // Adicione mais produtos conforme necessário
    ];
    this.filteredProducts = this.allProducts; // Inicie exibindo todos os produtos
  }

  ngOnInit() {
    this.filterProducts(); // Filtra produtos na inicialização
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

  public filterProducts() {
    this.filteredProducts = this.allProducts.filter(product =>
      (this.selectedBrands.size === 0 || this.selectedBrands.has(product.brand)) &&
      (this.selectedCategories.size === 0 || this.selectedCategories.has(product.category))
    );
  }
}
