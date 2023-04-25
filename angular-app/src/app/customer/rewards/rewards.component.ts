import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customers/customer.service';
import { BaseComponent } from 'src/app/shared/base.module';
import { Customer } from '../models/customers.model';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styles: [],
})
export class RewardsComponent extends BaseComponent implements OnInit {
  customer!: Customer;
  constructor(injector: Injector, private customerService: CustomerService) {
    super(injector);
  }
  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe({
      next: (res: Customer) => {
        this.customer = res;
      },
      error: (err: HttpErrorResponse) => {},
    });
  }
  redeem() {
    this.customerService.redeem().subscribe({
      next: (res: Customer) => {
        this.customer = res;
      },
      error: (err: HttpErrorResponse) => {},
    });
  }
}
