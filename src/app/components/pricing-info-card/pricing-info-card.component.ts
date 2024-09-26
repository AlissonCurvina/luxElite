import { Component, Input } from '@angular/core';
import { CommonModule, NgForOf, NgFor } from '@angular/common';
import { LoginComponent } from '../../views/login/login.component';
import { RouterModule, Routes } from '@angular/router';

@Component({
	selector: 'app-pricing-info-card',
	standalone: true,
	imports: [NgForOf, NgFor, CommonModule, RouterModule],
	templateUrl: './pricing-info-card.component.html',
	styleUrl: './pricing-info-card.component.css'
})

export class PricingInfoCardComponent {
	@Input() cardTitle!: string;
	@Input() cardSmallInfo!: string;
	@Input() packFeatures!: string[];
	@Input() packPrice!: number;
}

const routes: Routes = [
    { path: 'login', component: LoginComponent },
];