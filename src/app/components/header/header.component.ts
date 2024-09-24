import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { NavLoginMenuComponent } from '../nav-login-menu/nav-login-menu.component';
import { NavSearchComponent } from '../nav-search/nav-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NavMenuComponent, NavLoginMenuComponent, NavSearchComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  
}
