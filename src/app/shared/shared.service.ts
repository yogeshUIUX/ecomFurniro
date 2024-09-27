import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cartModalSubject = new Subject<void>();
  constructor() { }
  // Observable to notify when the cart modal should be opened
  cartModal$ = this.cartModalSubject.asObservable();

  // openCart() {
  //   this.cartModalSubject.next(); // Notify subscribers to open the cart modal
  // }
  @ViewChild('cartModal') modal: ElementRef | undefined;
  openCart() {
    this.cartModalSubject.next();
    if (this.modal) {
      this.modal.nativeElement.style.display = 'block';
      //  this.modal.nativeElement.class = 'modal-backdrop';
    }
  }

}
