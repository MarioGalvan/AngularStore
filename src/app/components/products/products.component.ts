import { Component } from '@angular/core';
import { products } from 'src/app/utils/Products.data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList = products;
}
