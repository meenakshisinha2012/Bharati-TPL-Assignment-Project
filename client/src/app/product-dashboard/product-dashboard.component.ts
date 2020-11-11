import { ProductService } from './../product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  public products: any;
  constructor(
    private http: HttpClient,
    private _productService: ProductService
  ) { }

  ngOnInit() {

    this._productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });

  }

  // To delete the product
  deleteProduct(productId: any) {
    console.log(productId);
    this._productService.deleteProduct(productId);
    location.reload();
  }
}
