import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem, OrderItemDto } from '../../models/cart-item.module';
import { OrderService } from 'src/app/services/orders/order.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: [],
})
export class PaymentComponent implements OnInit {
  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}
  cart: CartItem[] = [];
  total = 0;
  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartService.cartUpdated.subscribe((cart: any[]) => {
      this.cart = cart;
    });
  }

  pay() {
    const items = this.cart.map((i) => {
      return <OrderItemDto>{
        quantity: i.quantity,
        menuItemId: i.id,
      };
    });
    if (!items.length) {
      return;
    }

    this.orderService.checkOut(items).subscribe({
      next: (res) => {
        this.router.navigate(['/orders']);
      },
      error: (err: HttpErrorResponse) => {
        alert(JSON.stringify(err));
      },
    });
  }
}
