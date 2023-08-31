package com.dai5.back.service.product;

import com.dai5.back.model.product.Product;
import com.dai5.back.repository.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // CREATE
    public Product create(Product product){

        return this.productRepository.save(product);
    }

    // READ
    public List<Product> getAll() {

        List<Product> products = this.productRepository.findAll();
        return products;
    }

    public Product getById(Integer id) {

        return this.productRepository.findById(id).orElse(null);
    }

    // -- NOT TESTED --
    // UPDATE
    public Product update(Product updatedProduct) {

        return this.productRepository.save(updatedProduct);
    }

    // DELETE
    public void delete(Integer id) {

        productRepository.deleteById(id);
    }

}
