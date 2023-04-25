import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../security/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'shop',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../customer/shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'cart',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../customer/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'orders',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../customer/orders/orders.module').then(
            (m) => m.OrdersModule
          ),
      },
      {
        path: 'rewards',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../customer/rewards/rewards.module').then(
            (m) => m.RewardsModule
          ),
      },
      {
        path: 'customers',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../admin/admin.module').then((m) => m.AdminModule),
      },
      { path: '', redirectTo: 'shop', pathMatch: 'full' },
      { path: '**', redirectTo: 'customer' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
