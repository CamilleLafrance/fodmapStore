import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/model/product/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {

  listProducts: Array<Product> = [];
  router!: Router
  @Input() product: Product | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
  }

  redirectToProduct(productId: number): void {
    this.router.navigate(['/products', productId]); 
  }
}
