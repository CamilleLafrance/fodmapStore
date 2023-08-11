package com.dai5.back.controller.order;

import com.dai5.back.model.order.payment.Payment;
import com.dai5.back.service.order.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping("payments/order/{orderId}")
    public ResponseEntity<Payment> getPaymentByOrder(@PathVariable Integer idOrder) {
        Payment payment = paymentService.getPaymentByOrder(idOrder);
        return ResponseEntity.ok(payment);
    }
}
