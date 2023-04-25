import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/customer/models/customers.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomer(): Observable<Customer> {
    return this.http.get<Customer>(
      environment.apiUrl + '/customers/getcustomer'
    );
  }

  redeem(): Observable<Customer> {
    return this.http.get<Customer>(environment.apiUrl + '/customers/redeem');
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiUrl + '/customers');
  }
}
