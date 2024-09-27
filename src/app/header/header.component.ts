import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { projectConstants } from '../app.component';
import { CartServiceService } from '../shared/cart-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('cartModal') modal: ElementRef | undefined;
  cartItems: any[] = [];

  constructor(private cartService: CartServiceService) { }

  public iProjectVariables = projectConstants.projectVariables;
  public iurltVariables = projectConstants.projectImages;

  navItems: { label: string; link: string; icon: string; imgSrc: string }[] = [
    { label: 'Home', link: '/app-home', icon: '', imgSrc: '' },
    { label: 'Shop', link: '/app-shop', icon: '', imgSrc: '' },
    { label: 'About', link: '/app-about', icon: '', imgSrc: '' },
    { label: 'Contact', link: '/app-contact', icon: '', imgSrc: '' }
  ];
  iconNavItems: { label: string; cssClass: string; link: string; icon: string; imgSrc: string, fun?: () => void, isNotification: boolean }[] = [
    { label: '', cssClass: 'nav-link', link: '', icon: '', imgSrc: '../../../assets/icons/mdi_account-alert-outline.svg', isNotification: false },
    { label: '', cssClass: 'nav-link', link: '/app-about', icon: '', imgSrc: '../../../assets/icons/icons_search.svg', isNotification: false },
    { label: '', cssClass: 'nav-link heart-icon', link: '', icon: '', imgSrc: '../../../assets/icons/heart.svg', isNotification: false },
    {
      label: '', cssClass: 'nav-link', link: '', icon: '', imgSrc: '../../../assets/icons/cart.svg', fun: () => {
        this.openCart();
      }, isNotification: true
    },
  ];
  ngOnInit(): void {
    this.cartService.cartItems.subscribe(items => {
      this.cartItems = items; // Subscribe to cart items
      console.log(this.cartItems);
    });
  }

  openCart() {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'block';
      //  this.modal.nativeElement.class = 'modal-backdrop';
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'none';
    }
  }
  removeItem(item: any, index: number) {
    this.cartItems.splice(index, 1);
    alert(`${item.title} removed from cart!`);
  }

  calculateSubTotal() {
    let subTotal = 0;
    this.cartItems.forEach(item => {
      subTotal += (item.mrp * (100 - item.discountPercentage) / 100) * item.qty;
    });
    return subTotal.toFixed(2);
  }
}
