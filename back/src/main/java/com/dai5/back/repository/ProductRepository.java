package com.dai5.back.repository;

import com.dai5.back.model.Category;
import com.dai5.back.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAllByCategory(Category category);

    @Override
    Optional<Product> findById(Integer integer);
}
