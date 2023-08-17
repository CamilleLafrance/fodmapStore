package com.dai5.back.model.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "users")
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

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "address", length = 200)
    private String address;

    @Column(name = "postal_code", length = 50)
    private String postalCode;

    @Column(name = "city", length = 50)
    private String city;

    @Column(name = "country", length = 50)
    private String country;

    @Column(name = "logged_in")
    private Boolean loggedIn;

    @Column(name = "is_admin")
    private Boolean isAdmin;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Column(name = "registration_date", nullable = false)
    private LocalDateTime registrationDate;

    /*
    @OneToMany(mappedBy = "user",
            fetch = FetchType.LAZY)
    private List<Order> orders = new ArrayList<>();
     */
}