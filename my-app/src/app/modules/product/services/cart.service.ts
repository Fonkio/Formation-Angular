import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  protected products: Product[] = [];

  addToCart(product: Product) {
    this.products.push(product);
    console.log(this.products);
  }

  get productLength(): number {
    return this.products.length;
  }
}
