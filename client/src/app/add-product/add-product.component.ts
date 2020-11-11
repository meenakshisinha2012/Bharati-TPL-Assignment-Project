import { ProductService } from './../product.service';
import { ActivatedRoute, NavigationExtras, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  // Dependency injection
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router:Router,
    private _productService : ProductService
  ) { }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      productName: [''],
      category: [''],
      price: [''],
      quantity: [''],
      active: ['']
    });
  }

  addProduct() {
    const data = {
      product_name: this.addProductForm.get('productName').value,
      category: this.addProductForm.get('category').value,
      price: this.addProductForm.get('price').value,
      quantity: this.addProductForm.get('quantity').value,
      active: this.addProductForm.get('active').value,

    };

    // Add Product Service is being called
    this._productService.addProduct(data);
    this.router.navigate(['/product-dashboard']);
  }


}


