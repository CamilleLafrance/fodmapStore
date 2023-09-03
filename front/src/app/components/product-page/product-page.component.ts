import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router"; 
import { ProductService } from "src/app/services/product.service";
import { ShoppingCartCommunicationService } from "src/app/services/shopping-cart-communication.service";
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
  productsCount!: number;
  
  constructor(private productService: ProductService, private route: ActivatedRoute, private shoppingCartService: ShoppingCartCommunicationService) {}

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

  addToShoppingCart() { 
    this.shoppingCartService.incrementProductsCount();
  }
}
