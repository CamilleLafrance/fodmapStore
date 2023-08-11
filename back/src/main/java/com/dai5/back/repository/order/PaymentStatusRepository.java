package com.dai5.back.repository.order;

import com.dai5.back.model.order.PaymentStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentStatusRepository extends JpaRepository<PaymentStatus, Integer> {
}
