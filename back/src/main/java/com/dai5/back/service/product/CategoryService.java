package com.dai5.back.service.product;

import com.dai5.back.model.product.Category;
import com.dai5.back.repository.product.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    // CREATE
    public Category create(Category category){
        return this.categoryRepository.save(category);
    }

    // READ
    public List<Category> getAll() {
        return this.categoryRepository.findAll();
    }

    public Category getById(Integer id) {
        return this.categoryRepository.findById(id).orElse(null);
    }

    // UPDATE
    public Category update(Integer id, Category categoryDetails) {
        Category category = categoryRepository.findById(id).get();
        category.setName(categoryDetails.getName());
        category.setDescription(categoryDetails.getDescription());

        return categoryRepository.save(category);
    }

    // DELETE
    public void delete(Integer id) {
        categoryRepository.deleteById(id);
    }

}
