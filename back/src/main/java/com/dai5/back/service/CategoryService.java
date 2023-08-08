package com.dai5.back.service;

import com.dai5.back.model.Category;
import com.dai5.back.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category save(Category category){
        return this.categoryRepository.save(category);
    }

    public List<Category> getAll() {
        return this.categoryRepository.findAll();
    }

    public Category byId(Integer id) {
        return this.categoryRepository.findById(id).orElse(null);
    }

}
