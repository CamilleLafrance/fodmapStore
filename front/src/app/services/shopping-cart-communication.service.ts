import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartCommunicationService {
  private productsCountSubject = new BehaviorSubject<number>(0);
  productsCount$ = this.productsCountSubject.asObservable();

  incrementProductsCount() {
    const currentValue = this.productsCountSubject.value;
    const newValue = currentValue + 1;
    this.productsCountSubject.next(newValue);
  }

  constructor() {}
}
