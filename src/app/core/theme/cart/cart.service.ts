import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: { product: any; quantity: number }[] = [];

  // Add product to cart with quantity
  addToCart(product: any, quantity: number) {
    this.items.push({ product, quantity });
  }

  // Get all items in the cart
  getItems() {
    return this.items;
  }

  // Clear the cart
  clearCart() {
    this.items = [];
  }
}
