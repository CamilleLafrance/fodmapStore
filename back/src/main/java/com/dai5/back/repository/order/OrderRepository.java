package com.dai5.back.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    /*List<Order> findAllByUser(Order order);*/

    @Override
    Optional<Order> findById(Integer integer);
}
