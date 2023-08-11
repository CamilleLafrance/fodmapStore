package com.dai5.back.service.order;

import com.dai5.back.model.order.payment.Payment;
import com.dai5.back.repository.order.payment.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment getPaymentByOrder(Integer idOrder) {

        return paymentRepository.findByOrder(idOrder);
    }
}
