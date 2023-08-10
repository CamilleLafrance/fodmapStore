package com.dai5.back.controller.product;

import com.dai5.back.model.product.Category;
import com.dai5.back.service.product.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;
    @PostMapping("/categories/add")
    public Category addCategory(@RequestBody Category category){
        return this.categoryService.create(category);
    }

    @GetMapping("/categories")
    public List<Category> getAllCategories(){
        return this.categoryService.getAll();
    }

    @GetMapping("/categories/{idCategory}")
    public Category getCategory(@PathVariable Integer idCategory){
        return this.categoryService.getById(idCategory);
    }

}
