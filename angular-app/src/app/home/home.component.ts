import { Component, Injector, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../services/cart.service';
import { CartItem } from '../customer/models/cart-item.module';
import { BaseComponent } from '../shared/base.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, private cartService: CartService) {
    super(injector);
  }
  cart: CartItem[] = [];
  total = 0;
  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartService.cartUpdated.subscribe((cart: any[]) => {
      this.cart = cart;
    });
  }

  getTotal() {
    return this.cart.reduce(
      (sum, current) => sum + current.price * current.quantity,
      0
    );
  }
}
