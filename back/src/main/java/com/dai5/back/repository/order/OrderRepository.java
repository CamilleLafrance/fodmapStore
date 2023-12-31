package com.dai5.back.repository.order;

import com.dai5.back.model.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

    /*
    List<Order> findByUser(Integer idUser);

     */

    @Override
    Optional<Order> findById(Integer integer);
}