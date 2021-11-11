package com.example.milkHolanda.dto;
import com.example.milkHolanda.entities.AddressClient;
import javax.validation.constraints.*;
import java.util.Objects;

public class AddressClientDTO {

    private Long id;

    @NotEmpty(message = "Campo rua é obrigatório!")
    private String street;

    @Positive
    @NotNull(message = "Numero não pode ser nulo!")
    private Integer number;

    @Size(max = 20)
    private String complement;

    @NotEmpty(message = "Campo cep é obrigatório!")
    @Size(min = 8, max = 9, message = "cep tem que ter 8 digitos!")
    private String cep;

    @NotEmpty(message = "Campo Cidade é obrigatório!")
    private String city;

    public AddressClientDTO() {
    }

    public AddressClientDTO(AddressClient address) {
        this.id = address.getId();
        this.street = address.getStreet();
        this.number = address.getNumber();
        this.complement = address.getComplement();
        this.cep = address.getCep();
        this.city = address.getCity();
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
