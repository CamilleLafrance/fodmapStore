import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/model/product/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseURL: string = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  // CREATE
  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseURL + "/categories", category);
  }

  // READ
  public getAllCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.baseURL + "/categories");
  }

  public getCategoryById(id: number): Observable<Category> {
    const url = `${this.baseURL}/categories/${id}`;
    return this.http.get<Category>(url);
  }

  // UPDATE
  public updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.baseURL + "/products/update", category);
  }

  // DELETE
  public deleteCategory(id: number): Observable<Category>{
    const url = `${this.baseURL}/categories/${id}`;
    return this.http.delete<Category>(url);
  }
}
