import { Component } from "@angular/core";
import { Product } from "src/model/product/product";
import { ProductService } from "./services/product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "fodmapStore";

  product: Product | undefined;

  listProducts: Array<Product> = [];
  

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next : data =>{ 
        this.listProducts = data;
      },
      error : messageError => {
        console.error(messageError);
      }
    });
  }
}
