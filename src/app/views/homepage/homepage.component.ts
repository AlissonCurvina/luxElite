import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}

const routes: Routes = [
  { path: 'pricing', component: PricingComponent },
];