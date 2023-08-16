package com.dai5.back.controller.order;

import com.dai5.back.model.order.LineProduct;
import com.dai5.back.model.order.Order;
import com.dai5.back.service.order.LineProductService;
import com.dai5.back.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private LineProductService lineProductService;

    // -- NOT TESTED --
    // POST
    @PostMapping("/orders")
    public Order addOrder(@RequestBody Order order){
        return this.orderService.create(order);
    }

    // -- NOT TESTED --
    /*
    @PostMapping("/orders/{orderId}/add-product")
    public Order addProductToOrder(@PathVariable Integer id, @RequestBody LineProduct lineProductDetails) {

        LineProduct updatedLineProduct = lineProductService.updateLineProduct(id, lineProductDetails);
        Order order = updatedLineProduct.getOrder();
        orderService.updateOrderTotals(order);

        return order;
    }

     */

    // -- NOT TESTED --
    // GET
    @GetMapping("/orders")
    public List<Order> getAllOrders(){
        return this.orderService.getAll();
    }

    @GetMapping("/orders/{idOrder}")
    public Order getOrder(@PathVariable Integer idOrder){
        return this.orderService.getById(idOrder);
    }

    // -- NOT TESTED --
    /*
    @GetMapping("/orders/user/{idUser}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable Integer idUser){
        List<Order> orders = orderService.getOrdersByUser(idUser);
        return ResponseEntity.ok(orders);
    }

     */

    // -- NOT TESTED --
    /*
    // PUT
    @PutMapping("/orders/{idOrder}")
    public Order updateOrder(@PathVariable Integer idOrder, @RequestBody Order orderDetails){
        return orderService.update(idOrder, orderDetails);
    }

     */

    // -- NOT TESTED --
    // DELETE
    @DeleteMapping("/orders/{idOrder}")
    public void deleteCategory(@PathVariable Integer idOrder){
        orderService.delete(idOrder);
    }

}