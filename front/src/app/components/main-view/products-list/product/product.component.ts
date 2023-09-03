import { Component, Input } from "@angular/core";
import { ShoppingCartCommunicationService } from "src/app/services/shopping-cart-communication.service";
import { Product } from "src/model/product/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  productsCount!: number;
  
  @Input() product!: Product;  
  
  constructor(private shoppingCartService: ShoppingCartCommunicationService) {}

  ngOnInit(): void {
  }

  addToShoppingCart() { 
    this.shoppingCartService.incrementProductsCount();
  }
}
