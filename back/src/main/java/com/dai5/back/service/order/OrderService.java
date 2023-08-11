package com.dai5.back.service.order;

import com.dai5.back.model.order.LineProduct;
import com.dai5.back.model.order.Order;
import com.dai5.back.model.product.Category;
import com.dai5.back.model.product.Product;
import com.dai5.back.repository.order.LineProductRepository;
import com.dai5.back.repository.order.OrderRepository;
import com.dai5.back.repository.product.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private LineProductRepository lineProductRepository;

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

    @Transactional
    public void updateOrderTotals(Order order) {

        order.updateTotals();
        // Pas besoin de sauvegarder explicitement, car
        // la transaction gère la mise à jour en base de données
        // SINON : orderRepository.save(order);
    }

    // DELETE
    public void delete(Integer id) {

        orderRepository.deleteById(id);
    }


}
