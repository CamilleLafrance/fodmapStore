package com.dai5.back.repository.order;

import com.dai5.back.model.order.LineProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LineProductRepository extends JpaRepository<LineProduct, Integer> {
}
