package com.dai5.back.service;

import com.dai5.back.model.Category;
import com.dai5.back.model.Product;
import com.dai5.back.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product save(Product product){
        return this.productRepository.save(product);
    }

    public List<Product> getAll() {
        return this.productRepository.findAll();
    }

    public Product byId(Integer id) {
        return this.productRepository.findById(id).orElse(null);
    }

}
