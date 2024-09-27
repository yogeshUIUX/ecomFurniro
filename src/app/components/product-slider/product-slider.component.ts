import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input } from '@angular/core';
import { productSlider } from '../../../assets/JSONDATA/productSlider.json'

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductSliderComponent {
  @Input() pagination: boolean = true;
  @Input() navigation: boolean = true;
  @Input() spaceBetween: number = 50;
  @Input() slidesPerView: number = 2.1;

  http = inject(HttpClient);
  productSlider: {
    id: number,
    title: string,
    subTitle: string,
    url: string,
    thumbnail: string
  }[] = productSlider;

}
