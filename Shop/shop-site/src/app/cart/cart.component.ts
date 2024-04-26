import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      { id: 1, product: 1, quantity: 2 },
      { id: 2, product: 2, quantity: 1 },
      // Add more items if needed
    ],
    enrichedItems: [] // initialize this if needed
  };

  constructor() { }

  ngOnInit(): void {
    // You can perform any initialization logic here
  }

  getProductImage(productId: number): string {
    // Implement logic to get product image URL based on productId
    return '{image_url}';
  }

  getProductTitle(productId: number): string {
    return 'Product Title';
  }

  getProductPrice(productId: number): number {
    return 50; // Example price
  }

  getTotalItems(): number {
    return this.cart.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cart.items.reduce((total, item) => {
      const productPrice = this.getProductPrice(item.product);
      return total + (productPrice * item.quantity);
    }, 0);
  }
}
