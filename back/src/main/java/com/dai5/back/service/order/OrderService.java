package com.dai5.back.service.order;

import com.dai5.back.model.order.Order;
import com.dai5.back.model.product.Category;
import com.dai5.back.repository.order.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    // CREATE
    public Order create(Order order){
        return this.orderRepository.save(order);
    }

    // READ
    public List<Order> getAll() {
        return this.orderRepository.findAll();
    }

    public Order getById(Integer id) {
        return this.orderRepository.findById(id).orElse(null);
    }

    public List<Order> getOrdersByUser(Integer idUser) {
        return orderRepository.findByUser(idUser);
    }

    // UPDATE
    public Order update(Integer id, Order orderDetails) {
        Order order = orderRepository.findById(id).get();
        order.setUser(orderDetails.getUser());
        order.setTotalPrice(orderDetails.getTotalPrice());
        order.setOrderStatus(orderDetails.getOrderStatus());
        order.setShippedAt(orderDetails.getShippedAt());
        order.setDeliveredAt(orderDetails.getDeliveredAt());

        return orderRepository.save(order);
    }

    // DELETE
    public void delete(Integer id) {
        orderRepository.deleteById(id);
    }

}
