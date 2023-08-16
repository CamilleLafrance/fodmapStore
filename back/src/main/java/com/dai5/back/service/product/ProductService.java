package com.dai5.back.service.product;

import com.dai5.back.model.product.Product;
import com.dai5.back.repository.product.CategoryRepository;
import com.dai5.back.repository.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    // -- DOESN'T WORK
    /*
    // CREATE

    public Product create(Product product){
        return this.productRepository.save(product);
    }
    /*
    public Product create(Product product, Integer categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        product.setCategory(category);

        return productRepository.save(product);
    }

     */

    // READ
    public List<Product> getAll() {
        List<Product> products = this.productRepository.findAll();
        return products;
    }

    public Product getById(Integer id) {
        return this.productRepository.findById(id).orElse(null);
    }

    // -- DOESN'T WORK / NOT TESTED --
    // UPDATE
    /*
    public Product update(Integer id, Product productDetails) {
        Product product = productRepository.findById(id).get();
        product.setBarCode(productDetails.getBarCode());
        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setImage(productDetails.getImage());
        product.setPrice(productDetails.getPrice());
        product.setCategory(productDetails.getCategory());
        product.setStockQuantity(product.getStockQuantity());
        product.setWeight(product.getWeight());

        return productRepository.save(product);
    }

     */

    // DELETE
    public void delete(Integer id) {
        productRepository.deleteById(id);
    }

}
