import { Component, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent {

  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  addProduct(product:Product) : void {
    this.productListComponent.addProduct(product);
  }
}
