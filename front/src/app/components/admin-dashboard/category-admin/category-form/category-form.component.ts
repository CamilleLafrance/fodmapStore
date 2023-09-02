import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/model/product/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  public categoryForm!: FormGroup;
  listCategories: Array<Category> = []; 

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: this.formBuilder.control(""), 
      description: this.formBuilder.control("")
    });
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe((listCategories) => {
      this.listCategories = listCategories;
    });
  }

  addCategory(): void {
    let category: Category = this.categoryForm.value;
    this.categoryService.addCategory(category).subscribe({
      next: (data) => {
        console.log(data);
        alert("Catégorie ajoutée avec succès !");
        this.loadCategories();
        this.router.navigate(["categories-list-form"]);
      },
      error: (err) => {
        console.error(err);
        alert("✘ Une erreur est survenue");
        this.router.navigate(["categories-list-form"]);
      },
    });
  }
}
