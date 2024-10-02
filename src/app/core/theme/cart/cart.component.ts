import { Component, OnInit } from '@angular/core';
import { CartItem } from '../products/product.model';
import { CartService } from '../cart/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    cartProducts: CartItem[] = []; // Cart items array
    total: number = 0; // Total cost

    ngOnInit(): void {
        this.loadCartProducts(); // Load existing cart products
    }
    constructor(private cartService: CartService) {}

    loadCartProducts(): void {
        this.cartProducts = this.cartService.getItems(); // Load cart items
        this.calculateTotal(); // Calculate total cost
    }

    calculateTotal(): void {
        this.total = this.cartProducts.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        ); // Calculate total
    }

    removeProduct(index: number): void {
        this.cartProducts.splice(index, 1); // Remove product from cart
        localStorage.setItem('Cart', JSON.stringify(this.cartProducts)); // Save updated cart to local storage
        this.calculateTotal(); // Update total
    }
    
    clearCart(): void {
      // Loop through the cartProducts and remove each item
      while (this.cartProducts.length > 0) {
        this.cartProducts.splice(0, 1); // Remove the first product from the cart
      }
      localStorage.setItem('Cart', JSON.stringify(this.cartProducts)); // Update local storage
      this.total = 0; // Reset total
    }
}
