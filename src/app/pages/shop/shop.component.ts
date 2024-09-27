import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsComponent } from "../../products/products.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BreadcrumbBannerComponent } from "../../components/breadcrumb-banner/breadcrumb-banner.component";
import { ProductFiltersComponent } from "../../components/product-filters/product-filters.component";
import { FeaturesComponent } from "../../components/features/features.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductsComponent, RouterLink, RouterLinkActive, BreadcrumbBannerComponent, ProductFiltersComponent, FeaturesComponent, PaginationComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopComponent {

}
