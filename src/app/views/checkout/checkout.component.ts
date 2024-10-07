import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [],
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.css'
})

export class CheckoutComponent implements OnInit {
    packageId: number = 0;  // Declare packageId como uma propriedade da classe

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.packageId = +params['packageId'];
            this.loadPackageDetails(this.packageId);
        });
    }

    loadPackageDetails(id: number) {
        this.packageService.getProductById(id).subscribe(package => {
            this.package = package;
        });
    }

}
