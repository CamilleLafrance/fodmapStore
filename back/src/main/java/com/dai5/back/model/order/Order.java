package com.dai5.back.model.order;

import com.dai5.back.model.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "total_price", precision = 10, scale = 2)
    private BigDecimal totalPrice;

    @Column(name = "total_discount", precision = 10, scale = 2)
    private BigDecimal totalDiscount;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_status_id")
    private OrderStatus orderStatus;

    // -- NOT TESTED --
    @JsonBackReference
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LineProduct> linesProducts = new ArrayList<>();

    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "shipped_at")
    private Date shippedAt;

    @Column(name = "delivered_at")
    private Date deliveredAt;

    // -- NOT TESTED --
    @Transient
    public void getTotals() {
        BigDecimal newTotalOrder = BigDecimal.ZERO;
        for (LineProduct lineProduct : linesProducts) {
            lineProduct.getLineProductWithDiscount();
            BigDecimal lineProductTotalWithDiscount = lineProduct.getTotalPrice();
            newTotalOrder = newTotalOrder.add(lineProductTotalWithDiscount);
        }
        this.totalPrice = newTotalOrder;
    }
}