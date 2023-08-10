package com.dai5.back.controller.product;

import com.dai5.back.model.product.Category;
import com.dai5.back.model.product.Product;
import com.dai5.back.service.product.CategoryService;
import com.dai5.back.service.product.ProductService;
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
        return this.productService.create(product);
    }

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return this.productService.getAll();
    }

    @GetMapping("/products/{idProduct}")
    public Product getProduct(@PathVariable Integer idProduct){
        return this.productService.getById(idProduct);
    }

    @GetMapping("/products/category/{idCategory}")
    public List<Product> getAllProductsFromCategory(@PathVariable Integer idCategory){
        Category category = this.categoryService.getById(idCategory);
        return category.getProducts();
    }
}
