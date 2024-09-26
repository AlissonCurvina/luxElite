import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class NavSearchComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch() {
    if (this.searchTerm) {
      this.router.navigate(['/search-results'], { queryParams: { query: this.searchTerm } });
    }
  }
}
