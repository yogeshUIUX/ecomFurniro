import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductsComponent } from "../products/products.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductsComponent, RouterLink, RouterLinkActive],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopComponent {

}
