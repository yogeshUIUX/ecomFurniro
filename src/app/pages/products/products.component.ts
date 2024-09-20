import { Component, inject, Input } from '@angular/core';
import { products } from '../../product.json'
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() records: any[] = [];
  // @Input to accept the number of records to display
  @Input() numberOfRecords: number = 7;

  http = inject(HttpClient);
  productList: {
    title: string,
    description: string,
    currency: string,
    price: number,
    isDisount: boolean,
    discountPercentage: number,
    discountPrice: number,
    isNewProcuct: boolean,
    textNew: string,
    thumbnail: string
  }[] = products;


  ngOnInit() {
    // Slice the products array based on the number of records to show
    this.productList = this.productList.slice(0, this.numberOfRecords);
  }
}
