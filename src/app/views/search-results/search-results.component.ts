import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductInfoCardComponent } from '../../components/product-info-card/product-info-card.component';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../search.service';// Importe o serviço

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, ProductInfoCardComponent, FormsModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public searchTerm: string = '';
  public filteredProducts: any[] = [];
  public allProducts: any[] = []; // Armazenar todos os produtos

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService // Injete o serviço de busca
  ) {
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
      // Adicione mais produtos conforme necessário
    ];
  }

  ngOnInit() {
    // Assine o observable do SearchService para receber o termo de busca
    this.searchService.searchTerm$.subscribe(term => {
      this.searchTerm = term;
      this.filterProducts(); // Filtra os produtos com base no novo termo
    });

    // Também verifica o termo de busca da URL
    this.route.queryParams.subscribe(params => {
      if (params['search']) {
        this.searchService.setSearchTerm(params['search']);
      }
    });
  }

  public filterProducts() {
    if (this.searchTerm.trim() === '') {
      // Se o termo de busca estiver vazio, exibe todos os produtos
      this.filteredProducts = this.allProducts;
    } else {
      const lowerSearchTerm = this.searchTerm.toLowerCase();
      this.filteredProducts = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(lowerSearchTerm) ||
        product.description.toLowerCase().includes(lowerSearchTerm)
      );
    }
  }
}
