import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/model/product/product';

@Component({
  selector: 'app-products-list-form',
  templateUrl: './products-list-form.component.html',
  styleUrls: ['./products-list-form.component.css']
})
export class ProductsListFormComponent {
  
  @Input() product!: Product;  
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

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((listProducts) => {
      this.listProducts = listProducts;
    });
  }

  deleteProduct(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.productService.deleteProduct(id).subscribe(() => { 
        this.loadProducts();
      });
    }
  }

}
