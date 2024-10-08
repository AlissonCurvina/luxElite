import { Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { ProductsComponent } from './views/products/products.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { CarrersComponent } from './views/carrers/carrers.component';
import { FaqComponent } from './views/faq/faq.component';
import { PartnersComponent } from './views/partners/partners.component';
import { CreateNewUserComponent } from './views/create-new-user/create-new-user.component';
import { LoginComponent } from './views/login/login.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ForgetPasswordComponent } from './views/forget-password/forget-password.component';
import { SearchResultsComponent } from './views/search-results/search-results.component';

export const routes: Routes = [
    { path: '', component:HomepageComponent },
    { path: 'home', component:HomepageComponent },
    { path: 'pricing', component:PricingComponent },
    { path: 'products', component:ProductsComponent },
    { path: 'about', component:AboutComponent },
    { path: 'contact', component:ContactComponent },
    { path: 'carrers', component:CarrersComponent },
    { path: 'faq', component:FaqComponent },
    { path: 'partners', component:PartnersComponent },
    { path: 'create-new-user', component:CreateNewUserComponent },
    { path: 'login', component:LoginComponent },
    { path: 'product-details/:id', component:ProductDetailsComponent },
    { path: 'checkout', component:CheckoutComponent },
    { path: 'checkout/:packageId', component: CheckoutComponent },
    { path: 'forget-password', component:ForgetPasswordComponent},
    { path: 'search-results', component:SearchResultsComponent},
    { path: '**', component:PageNotFoundComponent },
];
