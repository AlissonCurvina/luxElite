import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //importe o FormsModule
import { CommonModule } from '@angular/common'; //importe o CommonModule se necessário
import { FilterService } from '../../services/filter/filter.service';
import { SearchService } from '../../services/search/search.service'; //importe o serviço de busca
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-search',
  standalone: true, //indica que o componente é standalone
  imports: [CommonModule, FormsModule], //inclua o FormsModule aqui
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})

export class NavSearchComponent {
  private _searchTerm: string = '';

  constructor(private router: Router, private filterService: FilterService, private searchService: SearchService) {}

  public get searchTerm() : string {
    return this._searchTerm;
  }

  public set searchTerm(value: string) {
    this._searchTerm = value;
  }

  //função chamada ao clicar na lupa (submit do form)
  search() {
    //atualiza o termo de busca no serviço
    this.searchService.setSearchTerm(this.searchTerm);
    this.router.navigate(['/products'], { queryParams: { search: this.searchTerm } }); //redireciona para a página de produtos com o termo de busca

  }
}
