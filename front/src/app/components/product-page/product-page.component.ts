import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/model/product/product";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"],
})
export class ProductPageComponent implements OnInit {
 
  @Input() product: Product | undefined;
  
  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.productService.getProductById(+id).subscribe({
      next : data =>{ 
        this.product = data;
      },
      error : messageError => {
        console.error(messageError);
      }
    });
  } 
}
