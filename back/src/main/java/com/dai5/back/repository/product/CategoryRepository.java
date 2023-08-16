package com.dai5.back.repository.product;

import com.dai5.back.model.product.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Override
    Optional<Category> findById(Integer integer);
}