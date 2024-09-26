import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';
  results: any[] = [];

  constructor(private route: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
      if (this.searchQuery) {
        this.searchService.searchItems(this.searchQuery).subscribe(data => {
          this.results = data;
        });
      }
    });
  }
}
