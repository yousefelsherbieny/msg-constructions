import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { products } from './product.model';
import { product } from './products'; // Import your product data here

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    products: products[] = product; // Assume this is your product list

    constructor(private cartService: CartService) {}

    addToCart(selectedProduct: products) {
        this.cartService.addToCart(selectedProduct, 1); // Add the product to the cart
    }
}
