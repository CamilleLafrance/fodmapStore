package com.dai5.back.model.user;

import com.dai5.back.model.order.Order;
import com.dai5.back.model.product.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "Users", schema = "fodmapStore")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 50)
    private String lastName;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "password_hash", nullable = false, length = 128)
    private String passwordHash;

    @Column(name = "phone_number", length = 20)
    private String phoneNumber;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "registration_date", nullable = false)
    private Instant registrationDate;

    @Column(name = "logged_in")
    private Boolean loggedIn;

    @Column(name = "is_admin")
    private Boolean isAdmin;

    @Column(name = "address", length = 200)
    private String address;

    @Column(name = "postal_code", length = 50)
    private String postalCode;

    @Column(name = "city", length = 50)
    private String city;

    @Column(name = "country", length = 50)
    private String country;

    @JsonIgnore
    @OneToMany(mappedBy = "order",
            fetch = FetchType.LAZY)
    private List<Order> orders = new ArrayList<>();

}