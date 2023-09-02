import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/model/product/category';

@Component({
  selector: 'app-category-modify',
  templateUrl: './category-modify.component.html',
  styleUrls: ['./category-modify.component.css']
})
export class CategoryModifyComponent {
  
  categoryForm: FormGroup | any;
  category: Category | undefined;
  listCategories: Array<Category> = [];

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: this.formBuilder.control(""), 
      description: this.formBuilder.control("")
    });

    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get("id") || "", 10);
      this.categoryService.getCategoryById(id).subscribe({
        next: (category) => {
          this.category = category; 
          this.categoryForm.patchValue(category);
          console.log(category);
        },
        error: (messageError) => {
          console.error(messageError);
        },
      });
    });
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe((listCategories) => {
      this.listCategories = listCategories;
    });
  }

  updateCategory(): void {
    let updatedCategory = { ...this.category, ...this.categoryForm.value };
    this.categoryService.updateCategory(updatedCategory).subscribe({
      next: (data) => {
        console.log(data);
        alert("Catégorie modifiée avec succès !");
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
