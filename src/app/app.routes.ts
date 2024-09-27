import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    { path: '', 'title': 'Funiro Home', component: HomeComponent },
    { path: 'app-home', 'title': 'Home', component: HomeComponent },
    { path: 'app-shop', 'title': 'Shop', component: ShopComponent },
    { path: 'app-about', 'title': 'About', component: AboutComponent },
    { path: 'app-contact', 'title': 'Contact', component: ContactComponent },
];
