import { ProductsComponent } from "../products/products.component";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, FooterComponent, HeaderComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
}
