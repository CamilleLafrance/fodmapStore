package com.dai5.back.repository.order;

import com.dai5.back.model.order.LineProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LineProductRepository extends JpaRepository<LineProduct, Integer> {
}
