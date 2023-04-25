import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/base.module';
import { CustomerService } from '../services/customers/customer.service';
import { Customer } from '../customer/models/customers.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerRewardsComponent } from './customer-rewards/customer-rewards.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [],
})
export class AdminComponent extends BaseComponent implements OnInit {
  customers: Customer[] = [];
  constructor(
    injector: Injector,
    private customerService: CustomerService,
    private modalService: NgbModal
  ) {
    super(injector);
  }
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (resp: Customer[]) => {
        this.customers = resp;
      },
      error: (err: HttpErrorResponse) => {
        this.customers = [];
      },
    });
  }

  open(customer: Customer) {
    const modalRef = this.modalService.open(CustomerRewardsComponent, {
      size: 'xl',
    });
    modalRef.componentInstance.customer = customer;
  }
}
