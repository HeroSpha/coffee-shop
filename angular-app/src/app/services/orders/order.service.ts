import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItemDto } from 'src/app/customer/models/cart-item.module';
import { OrderResponse } from 'src/app/customer/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  api = environment.apiUrl;
  constructor(private http: HttpClient) {}

  checkOut(orderItems: OrderItemDto[]): Observable<any> {
    return this.http.post<any>(
      this.api + '/orders',
      { orderItems: orderItems },
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  getOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(this.api + '/orders/getorders');
  }
}
