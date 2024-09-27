import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cart = new BehaviorSubject<any[]>([]); // Stores cart items
  cartItems = this.cart.asObservable(); // Observable to expose cart data

  constructor() { }

  // Method to add a product to the cart
  addToCart(item: any) {
    const currentCart = this.cart.value;
    if (!currentCart.some(x => x.id === item.id)) {
      currentCart.push(item);
      this.cart.next(currentCart);  // Update cart
      console.log('Cart updated:', this.cart.value);  // Debugging log
      localStorage.setItem('cart', JSON.stringify(item));
    } else {
      alert(`${item.title} Already added to cart!`);
    }


  }

  // // Method to get the cart items
  // getCartItems() {
  //   return this.cart.value;

  // }

  // Optional: Method to remove items from cart
  removeFromCart(productList: any) {
    const currentCart = this.cart.value.filter(item => item.id !== productList.id);
    this.cart.next(currentCart); // Update cart
  }
}
