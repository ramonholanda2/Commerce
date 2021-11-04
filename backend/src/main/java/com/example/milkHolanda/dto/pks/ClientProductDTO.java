package com.example.milkHolanda.dto.pks;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class ClientProductDTO {

    @NotNull
    @NotEmpty
    private String idClient;

    @Min(1)
    @NotNull
    private Long idProduct;

    public ClientProductDTO(String idClient, Long idProduct) {
        this.idClient = idClient;
        this.idProduct = idProduct;
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

    @Override
    public String toString() {
        return "ClientProductDTO{" +
                "idClient='" + idClient + '\'' +
                ", idProduct=" + idProduct +
                '}';
    }
}

