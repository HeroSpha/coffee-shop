import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderComponent } from './order.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
