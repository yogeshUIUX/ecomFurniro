import { RouterOutlet } from "@angular/router";
import { ProductsComponent } from "../../products/products.component";
import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { BrowseRangeComponent } from "../../components/browse-range/browse-range.component";
import { ProductSliderComponent } from "../../components/product-slider/product-slider.component";
import { TileGallaryComponent } from "../../components/tile-gallary/tile-gallary.component";
import { projectConstants } from "../../app.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, RouterOutlet, HeroComponent, BrowseRangeComponent, ProductSliderComponent, TileGallaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public iProjectVariables = projectConstants.projectVariables;
}
