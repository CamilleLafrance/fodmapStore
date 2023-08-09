package com.dai5.back.controller;

import com.dai5.back.model.Category;
import com.dai5.back.model.Product;
import com.dai5.back.service.CategoryService;
import com.dai5.back.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/products/add")
    public Product addProduct(@RequestBody Product product){
        return this.productService.save(product);
    }

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return this.productService.getAll();
    }

    @GetMapping("/products/{idProduct}")
    public Product getProduct(@PathVariable Integer idProduct){
        return this.productService.byId(idProduct);
    }

    @GetMapping("/products/category/{idCategory}")
    public List<Product> getAllProductsFromCategory(@PathVariable Integer idCategory){
        Category category = this.categoryService.byId(idCategory);
        return category.getProducts();
    }
}
