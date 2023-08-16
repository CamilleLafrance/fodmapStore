package com.dai5.back.model.order;

import com.dai5.back.model.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "linesproducts")
public class LineProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    // @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    // -- Est-ce utile ici ? --
    // @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "unit_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal unitPrice;

    @Column(name = "discount", precision = 5, scale = 2)
    private BigDecimal discount;

    @Column(name = "total_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalPrice;

    // -- NOT TESTED --
    public void calculateLineProductWithDiscount() {
        BigDecimal lineProductTotal = unitPrice.multiply(BigDecimal.valueOf(quantity));
        BigDecimal discountAmount = lineProductTotal.multiply(discount);
        BigDecimal lineProductTotalWithDiscount = lineProductTotal.subtract(discountAmount);
        this.totalPrice = lineProductTotalWithDiscount;
    }
}