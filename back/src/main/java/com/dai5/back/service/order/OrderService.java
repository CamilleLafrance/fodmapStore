package com.dai5.back.service.order;

import com.dai5.back.model.order.Order;
import com.dai5.back.repository.order.OrderRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

// -- NOT TESTED --
@Service
@Transactional
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    // CREATE
    public Order create(Order order){
        order.setCreatedAt(LocalDateTime.now());
        return this.orderRepository.save(order);
    }

    // READ
    public List<Order> getAll() {

        return this.orderRepository.findAll();
    }

    public Order getById(Integer id) {

        return this.orderRepository.findById(id).orElse(null);
    }

    /*
    public List<Order> getOrdersByUser(Integer idUser) {
        return orderRepository.findByUser(idUser);
    }
     */

    // UPDATE
    public void update(Order order) {

        this.orderRepository.save(order);
    }

    public void updateOrderTotals(Order order) {

        order.getTotals();
        // Pas besoin de sauvegarder explicitement, car
        // la transaction gère la mise à jour en base de données
        // SINON : orderRepository.save(order);
    }

    // DELETE
    public void delete(Integer id) {

        orderRepository.deleteById(id);
    }
}
