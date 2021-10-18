package com.example.milkHolanda.dto;

import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.jetbrains.annotations.NotNull;


public class RequestProductDTO {

    private Long id;

    private String name;

    private Double price;

    private ProductItem items;

    @JsonIgnore
    private Client client;

    public RequestProductDTO() {
    }

    public RequestProductDTO(@NotNull RequestProduct product, @NotNull ProductItem items) {
        this.id = product.getId();
        this.name = product.getName();
        this.items = items;
        this.price = product.getPrice();
    }

    public RequestProductDTO(@NotNull RequestProduct product) {
        this.id = product.getId();
        this.name = product.getName();
        this.price = product.getPrice();
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

    public ProductItem getItems() {
        return items;
    }

    public void setItems(ProductItem items) {
        this.items = items;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "RequestProductDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", items=" + price +
                ", items=" + items +
                '}';
    }
}
