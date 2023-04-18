import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() 
  product!: Product;

  constructor(private cartService: CartService) {

  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }
}
