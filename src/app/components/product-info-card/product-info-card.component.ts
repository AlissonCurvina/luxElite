import { Component, Input } from '@angular/core';
import { CommonModule, NgForOf, NgFor } from '@angular/common';
import { EventEmitter, Output } from '@angular/core'
@Component({
  selector: 'app-product-info-card',
  standalone: true,
  imports: [CommonModule, NgForOf, NgFor],
  templateUrl: './product-info-card.component.html',
  styleUrl: './product-info-card.component.css'
})
export class ProductInfoCardComponent {
  @Input() id!: number;
  @Input() name!: string;
	@Input() description!: string;
  @Input() category!: string;
	@Input() photos!: string[];
	@Input() price!: number;
  @Input() includedInPackages!: string[];
  @Input() brand!: string;

  @Output() detailsClick = new EventEmitter<number>();

  viewDetails() {
    this.detailsClick.emit(this.id);
  }
}