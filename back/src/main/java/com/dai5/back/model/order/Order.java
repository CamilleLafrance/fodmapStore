package com.dai5.back.model.order;

import com.dai5.back.model.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
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

    // -- Est-ce utile ici ? --
    // @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "total_price", precision = 10, scale = 2)
    private BigDecimal totalPrice;

    @Column(name = "total_discount", precision = 10, scale = 2)
    private BigDecimal totalDiscount;

    // -- Est-ce utile ici ? --
    // @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_status_id")
    private OrderStatus orderStatus;

    // -- NOT TESTED --
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LineProduct> linesProducts = new ArrayList<>();

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Column(name = "shipped_at")
    private LocalDateTime shippedAt;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Column(name = "delivered_at")
    private LocalDateTime deliveredAt;

    public List<LineProduct> getLinesProducts() {
        return linesProducts;
    }

    @Transient
    public void updateTotals() {
        BigDecimal newTotalOrder = BigDecimal.ZERO;
        for (LineProduct lineProduct : linesProducts) {
            lineProduct.calculateLineProductWithDiscount(); // Recalculer le prix total avec remise pour chaque ligne
            BigDecimal lineProductTotalWithDiscount = lineProduct.getTotalPrice();
            newTotalOrder = newTotalOrder.add(lineProductTotalWithDiscount);
        }
        this.totalPrice = newTotalOrder;
    }
}