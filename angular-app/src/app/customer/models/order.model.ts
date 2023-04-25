export interface OrderResponse {
  customerId: string;
  orderTotal: number;
  orderDate: string;
  status: string;
  orderItems: OrderItem[];
}

interface OrderItem {
  price: number;
  quantity: number;
}
