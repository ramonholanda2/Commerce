package com.example.milkHolanda.dto;

import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.entities.enums.PaymentStatus;

import java.io.Serializable;

public class PurchaseDTO implements Serializable {

    private Long id;

    private String status;

    private String qrCodeUrl;

    private RequestProduct product;

    private Client client;

    public PurchaseDTO() {
    }

    public PurchaseDTO(Long id, PaymentStatus status, String qrCodeUrl, RequestProduct product, Client client) {
        this.id = id;
        this.status = (status == null) ? null : status.getDescription();
        this.qrCodeUrl = qrCodeUrl;
        this.product = product;
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(PaymentStatus status) {
        this.status = status.getDescription();
    }

    public String getQrCodeUrl() {
        return qrCodeUrl;
    }

    public void setQrCodeUrl(String qrCodeUrl) {
        this.qrCodeUrl = qrCodeUrl;
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
