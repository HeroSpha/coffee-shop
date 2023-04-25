import { Injectable } from '@angular/core';
import { CartItem } from '../customer/models/cart-item.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[] = [];
  cartUpdated = new Subject<CartItem[]>();
  constructor() {}

  addItem(item: CartItem) {
    const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index > -1) {
      this.cart[index].quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    this.cartUpdated.next(this.cart.slice());
  }

  removeItem(item: CartItem) {
    const index = this.cart.indexOf(item);

    if (index > -1) {
      this.cart.splice(index, 1);
      this.cartUpdated.next(this.cart.slice());
    }
  }

  updateQuantity(item: CartItem, quantity: number) {
    const index = this.cart.indexOf(item);
    console.log(index);
    if (index > -1) {
      this.cart[index].quantity = quantity;
      this.cartUpdated.next(this.cart.slice());
    }
  }

  clearCart() {
    this.cart = [];
    this.cartUpdated.next(this.cart.slice());
  }

  getTotal() {
    return this.cart.reduce(
      (sum, current) => sum + current.price * current.quantity,
      0
    );
  }
}
