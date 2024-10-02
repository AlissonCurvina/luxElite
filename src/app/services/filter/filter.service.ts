import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class FilterService {
	private allProducts: any[] = []; // Todos os produtos
	private filteredProductsSubject = new BehaviorSubject<any[]>([]);
	filteredProducts$ = this.filteredProductsSubject.asObservable();

	constructor() { }

	setProducts(products: any[]) {
		this.allProducts = products;
		this.filteredProductsSubject.next(products); // Inicie com todos os produtos
	}

	filterByText(searchTerm: string) {
		const filtered = this.allProducts.filter(product =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		this.filteredProductsSubject.next(filtered);
	}

	filterByBrandAndCategory(selectedBrands: Set<string>, selectedCategories: Set<string>) {
		const filtered = this.allProducts.filter(product =>
			(selectedBrands.size === 0 || selectedBrands.has(product.brand)) &&
			(selectedCategories.size === 0 || selectedCategories.has(product.category))
		);
		this.filteredProductsSubject.next(filtered);
	}
}
