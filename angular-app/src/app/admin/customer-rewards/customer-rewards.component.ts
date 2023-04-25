import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/customer/models/customers.model';

@Component({
  selector: 'app-customer-rewards',
  templateUrl: './customer-rewards.component.html',
  styles: [],
})
export class CustomerRewardsComponent {
  @Input() customer!: Customer;
  constructor(public activeModal: NgbActiveModal) {}
}
