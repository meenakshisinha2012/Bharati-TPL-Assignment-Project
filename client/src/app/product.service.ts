import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-dashboard/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _addProductUrl = 'http://localhost:3000/products/add-product/';
  private _showProductsUrl = 'http://localhost:3000/products/show-product';
  private _deleteProductUrl = 'http://localhost:3000/products/delete-product/';
  constructor(private http: HttpClient) { }

  addProduct(data) {
    return this.http.post(this._addProductUrl, data).subscribe((response: any) => {

      console.log(response);
      alert('Product Added Successfully');
    }, (error) => {
      console.log(error);
      alert('Product not added');
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._showProductsUrl);
  }

  deleteProduct(productId) {
    return this.http.delete(this._deleteProductUrl + productId).subscribe((response: any) => {
      console.log(response);
      alert('Product Deleted Successfully');
    }, (error) => {
      console.log('Product not deleted', error);
      alert('Product Not Deleted Successfully');
    });
  }
}
