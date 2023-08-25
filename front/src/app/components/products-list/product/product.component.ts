import { Component, Input } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/model/product/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  
  @Input() product!: Product;  
  
  constructor() {}

  ngOnInit(): void {
  }
}
