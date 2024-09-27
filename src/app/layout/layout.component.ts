import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component"
import { register } from 'swiper/element/bundle';
import { ProductsComponent } from '../products/products.component';
import { RouterOutlet } from '@angular/router';
import { BrowseRangeComponent } from '../components/browse-range/browse-range.component';
register();;
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, ProductsComponent, BrowseRangeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
