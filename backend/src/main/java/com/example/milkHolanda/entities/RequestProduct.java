package com.example.milkHolanda.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
@Table(name = "tb_product")
@Transactional
public class RequestProduct implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double price;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tb_client_product")
    private Collection<Client> client;

    public Collection<Client> getClient() {
        return client;
    }

    public void setClient(Collection<Client> client) {
        this.client = client;
    }

    public RequestProduct() {
    }

    public RequestProduct(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "RequestProduct{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", items=" + price +
                ", client=" + client +
                '}';
    }
}
