package com.dai5.back.service.order;

import com.dai5.back.model.order.Order;
import com.dai5.back.repository.order.OrderRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    // -- DOESN'T WORK --
    // CREATE
    public Order create(Order order){

        return this.orderRepository.save(order);
    }

    // -- NOT TESTED --
    // READ
    public List<Order> getAll() {

        return this.orderRepository.findAll();
    }

    // -- NOT TESTED --
    public Order getById(Integer id) {

        return this.orderRepository.findById(id).orElse(null);
    }

    /*
    public List<Order> getOrdersByUser(Integer idUser) {
        return orderRepository.findByUser(idUser);
    }
     */

    // -- NOT TESTED --
    // UPDATE
    public void update(Order order) {

        this.orderRepository.save(order);
    }

    // -- NOT TESTED --
    public void updateOrderTotals(Order order) {

        order.getTotals();
    }

    // -- NOT TESTED --
    // DELETE
    public void delete(Integer id) {

        orderRepository.deleteById(id);
    }
}
