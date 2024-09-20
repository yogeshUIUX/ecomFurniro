import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "../footer/footer.component"
import { register } from 'swiper/element/bundle';
import { ProductsComponent } from '../products/products.component';
register();;
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent, ProductsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
