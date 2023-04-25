import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CustomerRewardsComponent } from './customer-rewards/customer-rewards.component';

@NgModule({
  declarations: [AdminComponent, CustomerRewardsComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
