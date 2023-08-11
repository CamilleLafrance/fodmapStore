package com.dai5.back.repository.order.payment;

import com.dai5.back.model.order.payment.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

    Payment findByOrder(Integer idOrder);
}
