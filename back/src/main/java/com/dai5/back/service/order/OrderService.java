package com.dai5.back.service.order;

import com.dai5.back.model.order.Order;
import com.dai5.back.repository.order.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Order create(Order order){
        return this.orderRepository.save(order);
    }

    public List<Order> getAll() {
        return this.orderRepository.findAll();
    }

    public Order getById(Integer id) {
        return this.orderRepository.findById(id).orElse(null);
    }

}
