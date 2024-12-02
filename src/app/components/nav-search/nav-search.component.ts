import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { FilterService } from '../../services/filter/filter.service';
import { SearchService } from '../../services/search/search.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-search',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
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

  
  search() {
    this.searchService.setSearchTerm(this.searchTerm);
    this.router.navigate(['/products'], { queryParams: { search: this.searchTerm } }); 

  }
}
