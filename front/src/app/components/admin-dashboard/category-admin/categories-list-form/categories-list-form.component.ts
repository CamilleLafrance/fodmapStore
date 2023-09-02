import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/model/product/category';

@Component({
  selector: 'app-categories-list-form',
  templateUrl: './categories-list-form.component.html',
  styleUrls: ['./categories-list-form.component.css']
})
export class CategoriesListFormComponent {
  listCategories: Array<Category> = [];
  
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next : data =>{ 
        this.listCategories = data;
      },
      error : messageError => {
        console.error(messageError);
      }
    });
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe((listCategories) => {
      this.listCategories = listCategories;
    });
  }

  deleteCategory(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      this.categoryService.deleteCategory(id).subscribe(() => { 
        this.loadCategories();
      });
    }
  }
}
