import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { ProductService } from "src/app/services/product.service";
import { Category } from "src/model/product/category";
import { Product } from "src/model/product/product";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent {
  public productForm!: FormGroup;
  listCategories: Array<Category> = [];
  listProducts: Array<Product> = [];

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      barCode: this.formBuilder.control(""),
      name: this.formBuilder.control(""),
      description: this.formBuilder.control(""),
      image: this.formBuilder.control(""),
      price: this.formBuilder.control(""),
      category: this.formBuilder.control(""),
      stockQuantity: this.formBuilder.control(""),
      weight: this.formBuilder.control(""),
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

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((listProducts) => {
      this.listProducts = listProducts;
    });
  }

  addProduct(): void {
    let product: Product = this.productForm.value;
    this.productService.addProduct(product).subscribe({
      next: (data) => {
        console.log(data);
        alert("Produit ajouté avec succès !");
        this.loadProducts();
        this.router.navigate(["products-list-form"]);
      },
      error: (err) => {
        console.error(err);
        alert("✘ Une erreur est survenue");
        this.router.navigate(["products-list-form"]);
      },
    });
  }
}
