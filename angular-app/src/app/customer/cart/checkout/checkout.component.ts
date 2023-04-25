import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../../models/cart-item.module';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [],
})
export class CheckoutComponent implements OnInit {
  constructor(public cartService: CartService) {}
  cart: CartItem[] = [];
  total = 0;
  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartService.cartUpdated.subscribe((cart: any[]) => {
      this.cart = cart;
    });
  }

  remove(cartItem: CartItem) {
    this.cartService.removeItem(cartItem);
  }

  add(item: CartItem) {
    this.cartService.updateQuantity(item, item.quantity + 1);
  }
  decrease(item: CartItem) {
    this.cartService.updateQuantity(item, item.quantity - 1);
  }
}
