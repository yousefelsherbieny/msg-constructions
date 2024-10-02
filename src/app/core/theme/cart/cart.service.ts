import { Injectable } from '@angular/core';
import { CartItem, products } from '../products/product.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private items: CartItem[] = []; // Use CartItem type for items

    // Add product to cart with quantity
    addToCart(product: products, quantity: number) {
        // Check if the product already exists in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            // If exists, update the quantity
            existingItem.quantity += quantity;
        } else {
            // If not, add new item to the cart
            this.items.push({ product, quantity });
        }

        localStorage.setItem('Cart', JSON.stringify(this.items)); // Save to local storage
    }

    // Get all items in the cart
    getItems(): CartItem[] {
        const cart = localStorage.getItem('Cart');
        if (cart) {
            this.items = JSON.parse(cart); // Load items from local storage
        }
        return this.items;
    }

    // Clear the cart
    clearCart() {
        this.items = [];
        localStorage.removeItem('Cart'); // Remove from local storage
    }

    // Calculate the total price of items in the cart
    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}
