import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-dashboard/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = 'https://bharati-tpl-assignment-api.herokuapp.com/' ;

  private _addProductUrl = this.api + 'products/add-product/';
  private _showProductsUrl = this.api + 'products/show-product';
  private _deleteProductUrl = this.api + 'products/delete-product/';

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
