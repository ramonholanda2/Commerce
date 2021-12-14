package com.example.milkHolanda.dto;

import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.RequestProduct;

import java.io.Serializable;

public class PurchaseDTO implements Serializable {

    private Long id;

    private RequestProduct product;

    private Client client;

    public PurchaseDTO() {
    }

    public PurchaseDTO(Long id, RequestProduct product, Client client) {
        this.id = id;
        this.product = product;
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
