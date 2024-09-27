import { Component, inject, Input } from '@angular/core';
// import { products } from '../../assets/JSONDATA/product.json'
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../shared/cart-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  // @Input() records: any[] = [];
  // @Input to accept the number of records to display
  @Input() numberOfRecords: number = 7;

  constructor(private http: HttpClient, private cartService: CartServiceService) { }

  // http = inject(HttpClient);
  // productList: {
  //   title: string,
  //   rating: number,
  //   description: string,
  //   currency: string,
  //   price: number,
  //   isDisount: boolean,
  //   discountPercentage: number,
  //   mrp: number,
  //   isNewProcuct: boolean,
  //   textNew: string,
  //   thumbnail: string
  // }[] = products;

  productList: any[] = [];



  ngOnInit(): void {
    // Slice the products array based on the number of records to show

    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any[]>('../../assets/JSONDATA/product.json').subscribe(
      (data) => {
        //  this.productList = data;  // Store the data if successful
        this.productList = data.slice(0, this.numberOfRecords);
      },
      (error) => {
        console.error('Error loading product data:', error);  // Log any errors
      }
    );
  }

  addToCart(item: any) {
    item.qty = 1;
    this.cartService.addToCart(item); // Add product to cart

  }
}
