import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { ProductService } from "src/app/services/product.service";
import { Category } from "src/model/product/category";
import { Product } from "src/model/product/product";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"],
})
export class ProductPageComponent implements OnInit {
 
  @Input() product!: Product; 
  category: Category | undefined;
  
  constructor(private productService: ProductService, private categoryService: CategoryService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '');
      this.productService.getProductById(id).subscribe({
        next : data =>{ 
          this.product = data;
          this.category = data.category;
        },
        error : messageError => {
          console.error(messageError);
        }
      })
    }) 
    ;
  } 
}
