import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/model/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL: string = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  // CREATE
  public addProduct(product : Product): Observable<Product>{
    return this.http.post<Product>(this.baseURL + "/products/add", product);
  } 

  // READ
  public getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseURL + "/products");
  }

  public getProductById(id: number): Observable<Product> {
    const url = `${this.baseURL}/products/${id}`;
    return this.http.get<Product>(url);
  }

  // UPDATE

  // DELETE
}
