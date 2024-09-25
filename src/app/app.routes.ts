import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './products/home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [

    { path: '', 'title': 'Funiro Home', component: LayoutComponent },
    { path: 'app-home', 'title': 'Funiro Home', component: HomeComponent },
    { path: 'app-shop', 'title': 'Funiro Shop', component: ShopComponent },
];
