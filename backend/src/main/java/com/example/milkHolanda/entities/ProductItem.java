package com.example.milkHolanda.entities;
import com.example.milkHolanda.dto.ProductItemDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tb_product_item")
public class ProductItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer quantity;

    private Double subtotal;

    @JsonIgnore
    @JoinColumn(name = "product_id")
    @OneToOne
    private RequestProduct product;

    @OneToOne
    @JsonIgnore
    private Client client;

    public ProductItem() {
    }

    public ProductItem(Long id, Integer quantity, Double subtotal, RequestProduct product, Client client) {
        this.id = id;
        this.quantity = quantity;
        this.subtotal = subtotal;
        this.product = product;
        this.client = client;
    }

    public ProductItem(Long id, Integer quantity, Double subtotal) {
        this.id = id;
        this.quantity = quantity;
        this.subtotal = subtotal;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(Double subtotal) {
        this.subtotal = subtotal;
    }

    public RequestProduct getProduct() {
        return product;
    }

    public void setProduct(RequestProduct product) {
        this.product = product;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "ProductItem{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", subtotal=" + subtotal +
                ", product=" + product +
                ", client=" + client +
                '}';
    }
}
