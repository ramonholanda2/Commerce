package com.example.milkHolanda.dto.pks;

public class ClientProductDTO {

    private String idClient;

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

