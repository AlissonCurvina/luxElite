import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../../views/login/login.component';

@Component({
  selector: 'app-nav-login-menu',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, LoginComponent ],
  templateUrl: './nav-login-menu.component.html',
  styleUrl: './nav-login-menu.component.css'
})
export class NavLoginMenuComponent {

}
