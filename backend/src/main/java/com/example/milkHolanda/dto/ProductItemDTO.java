package com.example.milkHolanda.dto;

import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;

public class ProductItemDTO {

    private Long id;
    private Integer quantity = 1;
    private Double subtotal;

    private RequestProduct product;

    private Client client;


    public ProductItemDTO(ProductItem item) {
    }

    public ProductItemDTO(Long id, Integer quantity, Double subtotal, RequestProduct product) {
        this.id = id;
        this.quantity = quantity;
        this.subtotal = subtotal;
        this.product = product;
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
        return "ProductItemDTO{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", subtotal=" + subtotal +
                ", product=" + product +
                '}';
    }

}
