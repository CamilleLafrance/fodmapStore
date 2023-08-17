package com.dai5.back.model.product;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Lob
    @Column(name = "description")
    private String description;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Column(name = "creation_date", nullable = false)
    private LocalDateTime creationDate;

    /*
    -- Est-ce plus pertinent une relation @ManyToMany ? --
    */
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Product> products = new ArrayList<>();

}