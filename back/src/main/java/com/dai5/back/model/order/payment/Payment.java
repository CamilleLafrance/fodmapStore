package com.dai5.back.model.order.payment;

import com.dai5.back.model.order.Order;
import com.dai5.back.model.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "payments")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    // -- Est-ce utile ici ? --
    // @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // -- Est-ce utile ici ? --
    // @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Column(name = "amount", precision = 10, scale = 2)
    private BigDecimal amount;

    // -- Est-ce utile ici ? --
    // @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_status_id")
    private PaymentStatus paymentStatus;

    // -- Est-ce utile ici ? --
    // @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_method_id")
    private PaymentMethod paymentMethod;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Column(name = "paid_at", nullable = false)
    private LocalDateTime paidAt;

}