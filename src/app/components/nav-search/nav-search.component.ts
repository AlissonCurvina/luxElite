import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { CommonModule } from '@angular/common'; // Importe o CommonModule se necessário
import { SearchService } from '../../search.service'; // Importe o serviço de busca

@Component({
  selector: 'app-nav-search',
  standalone: true, // Indica que o componente é standalone
  imports: [CommonModule, FormsModule], // Inclua o FormsModule aqui
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent {
  public searchTerm: string = '';

  constructor(private searchService: SearchService) {}

  // Função chamada ao clicar na lupa (submit do form)
  search() {
    // Atualiza o termo de busca no serviço
    this.searchService.setSearchTerm(this.searchTerm);
  }
}
