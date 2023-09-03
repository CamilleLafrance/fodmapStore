import { Component, Input } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { ProductService } from "src/app/services/product.service";
import { Category } from "src/model/product/category";
import { Product } from "src/model/product/product";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"],
})
export class ShoppingCartComponent {
  @Input() product!: Product; 
  listProducts: Array<Product> = [];
  category!: Category;
  listCategories: Array<Category> = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.listProducts = data;
      },
      error: (messageError) => {
        console.error(messageError);
      },
    });
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.listCategories = data;
      },
      error: (messageError) => {
        console.error(messageError);
      },
    });
  }
}
