package com.example.milkHolanda.dto;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

public class ClientDTO {

    private String id;

    @NotBlank(message = "nome obrigatório!")
    private String name;

    @NotBlank(message = "sobrenome obrigatório!")
    private String surname;

    private Boolean isAdmin;

    private List<AddressClientDTO> address = new ArrayList<>();

    private List<RequestProductDTO> products = new ArrayList<>();

    public ClientDTO() {
    }

    public ClientDTO(String id, String name, String surname, Boolean isAdmin, List<RequestProductDTO> products, List<AddressClientDTO> address) {
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.products = products;
        this.address = address;
        this.isAdmin = isAdmin;
    }

    public ClientDTO(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Boolean getAdmin() {
        return isAdmin;
    }

    public void setAdmin(Boolean admin) {
        isAdmin = admin;
    }

    public List<AddressClientDTO> getAddress() {
        return address;
    }

    public void setAddress(List<AddressClientDTO> address) {
        this.address = address;
    }

    public List<RequestProductDTO> getProducts() {
        return products;
    }

    public void setProducts(List<RequestProductDTO> products) {
        this.products = products;
    }



    @Override
    public String toString() {
        return "ClientDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address=" + address +
                '}';
    }
}
