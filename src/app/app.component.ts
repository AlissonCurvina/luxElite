import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet, 
		CommonModule, 
		RouterLink, 
		RouterLinkActive, 
		HeaderComponent,
		FooterComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'lux-elite';
	isOpen = false; // Initial value

	// Method to toggle isOpen
	toggleMenu() {
		this.isOpen = !this.isOpen;
	}
}
