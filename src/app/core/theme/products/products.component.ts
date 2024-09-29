import { Component } from '@angular/core';
import { product } from './products';
import { products } from './product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  product: products[] = product;
  cartItems = [];
}
