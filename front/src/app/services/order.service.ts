import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/model/order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseURL: string = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  // CREATE
  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseURL + "/orders", order);
  }

  // READ
  public getAllOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.baseURL + "/orders");
  }

  public getOrderById(id: number): Observable<Order> {
    const url = `${this.baseURL}/orders/${id}`;
    return this.http.get<Order>(url);
  }

  // UPDATE

  // DELETE
}
