import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/model/product/category';
import { Product } from 'src/model/product/product';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent {
  @Input() product!: Product;
  public productForm!: FormGroup;
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
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '');
      this.productService.getProductById(id).subscribe({
        next : data => {
          this.initForm(data);
          this.product = data;
        },
        error : messageError => {
          console.error(messageError);
        }
      });
    })

  }

  initForm(product: any): void {
    this.productForm = this.formBuilder.group({
      barCode: product.barCode,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      category: product.category,
      stockQuantity: product.stockQuantity,
      weight: product.weight,
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

  updateProduct(): void {
    let updatedProduct: Product = this.productForm.value;
    updatedProduct.id = this.product.id;
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
