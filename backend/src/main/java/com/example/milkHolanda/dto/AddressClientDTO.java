package com.example.milkHolanda.dto;
import com.example.milkHolanda.entities.Client;

import javax.validation.constraints.*;
import java.util.Objects;

public class AddressClientDTO {

    private Long id;

    @NotEmpty(message = "Campo rua é obrigatório!")
    private String street;

    @Positive
    @Min(value = 2)
    private Integer number;

    @Size(max = 20)
    private String complement;

    @NotEmpty(message = "Campo cep é obrigatório!")
    @Size(min = 8, max = 8)
    private String cep;

    @NotEmpty(message = "Campo Cidade é obrigatório!")
    private String city;

    private Client client;

    public AddressClientDTO() {
    }

    public AddressClientDTO(Long id, String street, Integer number, String complement, String cep, String city) {
        this.id = id;
        this.street = street;
        this.number = number;
        this.complement = complement;
        this.cep = cep;
        this.city = city;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "AddressClientDTO{" +
                "id='" + id + '\'' +
                ", rua='" + street + '\'' +
                ", number=" + number +
                ", complement='" + complement + '\'' +
                ", cep='" + cep + '\'' +
                ", city='" + city + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AddressClientDTO that = (AddressClientDTO) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}
