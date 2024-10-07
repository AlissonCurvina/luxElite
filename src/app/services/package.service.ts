import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//logica para detalhes

@Injectable({
    providedIn: 'root'
})

export class PackageService {
    private packages = [
        {
            id:
        },
        {

        },
        {

        },
        {

        },
        {

        },
    ]

    constructor() { }

    getProductById(id: number): Observable<any> {
        const product = this.products.find(p => p.id === id);
        return of(product); // retorna um Observable
    }
}
