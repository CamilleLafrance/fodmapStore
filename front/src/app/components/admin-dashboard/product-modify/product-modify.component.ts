import { Component, Input } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { ProductService } from "src/app/services/product.service";
import { Category } from "src/model/product/category";
import { Product } from "src/model/product/product";

@Component({
  selector: "app-product-modify",
  templateUrl: "./product-modify.component.html",
  styleUrls: ["./product-modify.component.css"],
})
export class ProductModifyComponent {
  @Input() product!: Product;
  productForm: FormGroup | any;
  category: Category | undefined;
  listCategories: Array<Category> = [];
  listProducts: Array<Product> = [];

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      barCode: this.formBuilder.control(""),
      name: this.formBuilder.control(""),
      description: this.formBuilder.control(""),
      image: this.formBuilder.control(""),
      category: this.formBuilder.control(""),
      price: this.formBuilder.control(""),
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

    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get("id") || "", 10);
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product;
          this.category = product.category;
          this.productForm.patchValue(product);
          console.log(product);
        },
        error: (messageError) => {
          console.error(messageError);
        },
      });
    });
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((listProducts) => {
      this.listProducts = listProducts;
    });
  }

  updateProduct(): void {
    let updatedProduct = { ...this.product, ...this.productForm.value };
    this.productService.updateProduct(updatedProduct).subscribe({
      next: (data) => {
        console.log(data);
        alert("Produit modifié avec succès !");
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
