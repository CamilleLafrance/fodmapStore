package com.dai5.back.controller.order;

import com.dai5.back.model.order.Order;
import com.dai5.back.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/orders")
    public List<Order> getAllOrders(){
        return this.orderService.getAll();
    }

    @GetMapping("/orders/{idOrder}")
    public Order getOrder(@PathVariable Integer idOrder){
        return this.orderService.byId(idOrder);
    }

    @PostMapping("/orders/add")
    public Order addOrder(@RequestBody Order order){
        return this.orderService.save(order);
    }

}
