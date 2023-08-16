package com.dai5.back.model.product;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
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

    @Column(name = "creation_date", nullable = false)
    private Instant creationDate;

    /*
    -- Cette syntaxe-là est-elle meilleure ? --
    @OneToMany(mappedBy = "category")
    private List<Product> products = new ArrayList<>();

    -- Est-ce plus pertinent une relation @ManyToMany ? --
    */
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Product> products;

}