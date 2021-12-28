package com.example.milkHolanda.dto.pks;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class PurchaseProductDTO implements Serializable {

    @NotEmpty(message = "idClient não pode ser vazio!")
    private String idClient;

    @NotEmpty(message = "qrCodeUrl não pode ser vazio!")
    private String qrCodeUrl;

    @NotNull(message = "idProduct não pode ser nulo!")
    private Long idProduct;

    @NotNull(message = "idAddress não pode ser nulo!")
    private Long idAddress;

    public PurchaseProductDTO() {
    }

    public PurchaseProductDTO(String idClient, String qrCodeUrl, Long idProduct, Long idAddress) {
        this.idClient = idClient;
        this.idProduct = idProduct;
        this.idAddress = idAddress;
        this.qrCodeUrl = qrCodeUrl;
    }

    public String getIdClient() {
        return idClient;
    }

    public void setIdClient(String idClient) {
        this.idClient = idClient;
    }

    public String getQrCodeUrl() {
        return qrCodeUrl;
    }

    public void setQrCodeUrl(String qrCodeUrl) {
        this.qrCodeUrl = qrCodeUrl;
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
