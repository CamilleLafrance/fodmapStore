package com.dai5.back.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Customers", schema = "fodmapStore")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "address", nullable = false, length = 200)
    private String address;

    @Column(name = "postal_code", nullable = false, length = 50)
    private String postalCode;

    @Column(name = "city", nullable = false, length = 50)
    private String city;

    @Column(name = "country", nullable = false, length = 50)
    private String country;

}