package com.example.milkHolanda.dto;

import com.example.milkHolanda.entities.RequestProduct;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.io.Serializable;
import java.util.Objects;

public class ProductDTO implements Serializable {

    private Long id;

    @NotEmpty(message = "Este campo não pode ser vazio!")
    @Length(min = 3, max = 15, message = "Valor minimo 3 e maximo 15!")
    private String name;

    @NotNull(message = "O preço não pode ser nulo!")
    @Positive(message = "O preço deve ser maior que zero!")
    private Double price;

    @NotEmpty(message = "Este campo não pode ser vazio!")
    private String urlImage;

    public ProductDTO() {
    }

    public ProductDTO(RequestProduct product) {
        this.id = product.getId();
        this.name = product.getName();
        this.price = product.getPrice();
        this.urlImage = product.getUrlImage();
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductDTO that = (ProductDTO) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "ProductDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", urlImage='" + urlImage + '\'' +
                '}';
    }
}
