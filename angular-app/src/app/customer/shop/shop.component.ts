import { Component, Injector, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item.module';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../models/cart-item.module';
import { HttpClient } from '@angular/common/http';
import { MenuItemService } from 'src/app/services/menu-items/menu-item.service';
import { BaseComponent } from 'src/app/shared/base.module';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: [],
})
export class ShopComponent extends BaseComponent implements OnInit {
  menuItems: MenuItem[] = [];
  cart: CartItem[] = [];
  constructor(
    injector: Injector,
    private cartService: CartService,
    private menuItemService: MenuItemService
  ) {
    super(injector);
  }
  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.menuItemService.getItems().subscribe((data) => {
      this.menuItems = data;
    });
  }

  addToCart(item: MenuItem) {
    const cartItem = <CartItem>{
      name: item.name,
      price: item.price,
      id: item.id,
      quantity: 1,
      image: item.image,
    };
    this.cartService.addItem(cartItem);
  }
}
