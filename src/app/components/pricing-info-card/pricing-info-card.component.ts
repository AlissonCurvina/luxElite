import { Component, Input } from '@angular/core';
import { CommonModule, NgForOf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-pricing-info-card',
	standalone: true,
	imports: [NgForOf, NgFor, CommonModule, RouterModule],
	templateUrl: './pricing-info-card.component.html',
	styleUrls: ['./pricing-info-card.component.css'] 
})
export class PricingInfoCardComponent {
	@Input() packageId!: string;
	@Input() cardTitle!: string;
	@Input() cardSmallInfo!: string;
	@Input() packFeatures!: string[];
	@Input() packPrice!: number;
	@Input() onSubscribe: (pack: any) => void = () => {}; //inicializando como uma função vazia

	//método para assinar
	subscribe() {
		const pack = {
			title: this.cardTitle,
			price: this.packPrice
		};
		this.onSubscribe(pack);
	}
}
