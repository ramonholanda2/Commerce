package com.example.milkHolanda.dto.pks;

import java.io.Serializable;

public class PurchaseProductDTO implements Serializable {

    private String idClient;

    private Long idProduct;

    private Long idAddress;

    public PurchaseProductDTO() {
    }

    public PurchaseProductDTO(String idClient, Long idProduct, Long idAddress) {
        this.idClient = idClient;
        this.idProduct = idProduct;
        this.idAddress = idAddress;
    }

    public String getIdClient() {
        return idClient;
    }

    public void setIdClient(String idClient) {
        this.idClient = idClient;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public Long getIdAddress() {
        return idAddress;
    }

    public void setIdAddress(Long idAddress) {
        this.idAddress = idAddress;
    }

    @Override
    public String toString() {
        return "PurchaseProductDTO{" +
                "idClient='" + idClient + '\'' +
                ", idProduct=" + idProduct +
                ", idAddress=" + idAddress +
                '}';
    }
}
