package com.dai5.back.repository.product;

import com.dai5.back.model.product.Category;
import com.dai5.back.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Override
    Optional<Product> findById(Integer integer);
}
