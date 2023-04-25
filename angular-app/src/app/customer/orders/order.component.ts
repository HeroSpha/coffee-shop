import { Component, Injector, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orders/order.service';
import { BaseComponent } from 'src/app/shared/base.module';
import { OrderResponse } from '../models/order.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent extends BaseComponent implements OnInit {
  orders: OrderResponse[] = [];
  constructor(injector: Injector, private orderService: OrderService) {
    super(injector);
  }
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe({
      next: (resp: OrderResponse[]) => {
        this.orders = resp;
      },
      error: (err: HttpErrorResponse) => {},
    });
  }
}
