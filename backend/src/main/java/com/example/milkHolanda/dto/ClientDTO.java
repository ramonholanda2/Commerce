package com.example.milkHolanda.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class ClientDTO {

    private String id;

    @NotNull(message = "nulo")
    @NotEmpty(message = "vazio")
    @NotBlank(message = "nome obrigatório!")
    private String name;

    private AddressClientDTO address;

    private List<RequestProductDTO> products = new ArrayList<>();

    public ClientDTO() {
    }

    public ClientDTO(String id) {
        this.id = id;
    }

    public ClientDTO(String id, String name, List<RequestProductDTO> products, AddressClientDTO address) {
        this.id = id;
        this.name = name;
        this.products = products;
        this.address = address;

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

    public AddressClientDTO getAddress() {
        return address;
    }

    public void setAddress(AddressClientDTO address) {
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
