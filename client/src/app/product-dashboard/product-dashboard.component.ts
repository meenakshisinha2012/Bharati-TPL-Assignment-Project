import { ProductService } from './../product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  public products: any;
  constructor(
    private _productService: ProductService,
  ) { }

  ngOnInit() {

    this._productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });

  }

  // To delete the product
  deleteProduct(productId: any) {
    this._productService.deleteProduct(productId);
    alert('Product deletion in process...');
    location.reload();
  }
}
