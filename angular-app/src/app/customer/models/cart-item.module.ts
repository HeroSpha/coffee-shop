export interface CartItem {
  total: number;
  quantity: number;
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface OrderItemDto {
  menuItemId: string;
  quantity: number;
}
