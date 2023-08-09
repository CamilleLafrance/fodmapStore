package com.dai5.back.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "Categories", schema = "fodmapStore")
public class Category {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "creation_date", nullable = false)
    private Instant creationDate;

    @OneToMany(mappedBy = "category")
    private List<Product> products = new ArrayList<>();
}