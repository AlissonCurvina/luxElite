import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf, NgFor } from '@angular/common';

@Component({
	selector: 'app-pricing-info-card',
	standalone: true,
	imports: [NgForOf, NgFor, CommonModule],
	templateUrl: './pricing-info-card.component.html',
	styleUrl: './pricing-info-card.component.css'
})

export class PricingInfoCardComponent {
	@Input() cardTitle!: string;
	@Input() cardSmallInfo!: string;
	@Input() packFeatures!: string[];
	@Input() packPrice!: number;
}
