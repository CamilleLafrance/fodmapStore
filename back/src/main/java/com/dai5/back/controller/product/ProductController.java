package com.dai5.back.controller.product;

import com.dai5.back.model.product.Product;
import com.dai5.back.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    // POST
    @PostMapping("/products/add")
    public Product addProduct(@RequestBody Product product){

        return this.productService.create(product);
    }

    // GET
    @GetMapping("/products")
    public List<Product> getAllProducts(){

        return this.productService.getAll();
    }

    @GetMapping("/products/{idProduct}")
    public Product getProduct(@PathVariable Integer idProduct){

        return this.productService.getById(idProduct);
    }

    // -- DOESN'T WORK / NOT TESTED --
    // PUT
    /*
    @PutMapping("/products/{idProduct}")
    public Product updateProduct(@PathVariable Integer idProduct, @RequestBody Product productDetails){
        return productService.update(idProduct, productDetails);
    }

     */

    // DELETE
    @DeleteMapping("/products/{idProduct}")
    public void deleteProduct(@PathVariable Integer idProduct){
        productService.delete(idProduct);
    }
}
