package com.dai5.back.service.product;

import com.dai5.back.model.product.Category;
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
        return this.productRepository.findAll();
    }

    public Product getById(Integer id) {
        return this.productRepository.findById(id).orElse(null);
    }

    /*  appel de la méthode findAllByCategory ? */
    // UPDATE
    public Product update(Integer id, Product productDetails) {
        Product product = productRepository.findById(id).get();
        product.setBarCode(productDetails.getBarCode());
        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setImage(productDetails.getImage());
        product.setPrice(productDetails.getPrice());
        product.setCategory(productDetails.getCategory());
        product.setStockQuantity(product.getStockQuantity());

        return productRepository.save(product);
    }

    // DELETE
    public void delete(Integer id) {
        productRepository.deleteById(id);
    }

}
