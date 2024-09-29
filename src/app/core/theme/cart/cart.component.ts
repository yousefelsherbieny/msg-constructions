import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../products/products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  product: any;
  quantity!: number[];
  cartProducts: any[] = [];
  total: number = 0;
  orderSuccess: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the product ID from the route
    const productId = this.route.snapshot.paramMap.get('id');

    // Find the product using the product ID
    this.product = product.find(item => item.id === productId);

    // Load existing cart products from local storage
    this.loadCartProducts();
  }

  loadCartProducts(): void {
    if ('Cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('Cart')!);
    }
    this.calculateTotal();
  }

  addToCart() {
    // Check if the product is already in the cart
    const existingProduct = this.cartProducts.find(item => item.product.id === this.product.id);

    if (existingProduct) {
      // If product exists, update the quantity
      existingProduct.quantity += this.quantity;
    } else {
      // If not, add the new product to the cart
      this.cartProducts.push({ product: this.product, quantity: this.quantity });
    }

    // Save updated cart back to localStorage
    localStorage.setItem('Cart', JSON.stringify(this.cartProducts));
    this.calculateTotal();

    console.log(`Added ${this.quantity} of ${this.product.name} to the cart`);
  }

  calculateTotal(): void {
    this.total = 0;
    this.cartProducts.forEach(item => {
      this.total += item.product.price * item.quantity;
    });
  }

  removeProduct(index: number): void {
    this.cartProducts.splice(index, 1);
    localStorage.setItem('Cart', JSON.stringify(this.cartProducts));
    this.calculateTotal();
  }

  clearCart(): void {
    this.cartProducts = [];
    localStorage.removeItem('Cart');
    this.calculateTotal();
  }
}
