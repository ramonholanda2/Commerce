package com.example.milkHolanda.dto;

import com.example.milkHolanda.entities.RequestProduct;
import org.hibernate.validator.constraints.Length;
import org.jetbrains.annotations.NotNull;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import java.io.Serializable;

public class ProductDTO implements Serializable {

    private Long id;

    @NotEmpty(message = "este campo não pode ser vazio!")
    @Length(min = 3, max = 15, message = "Valor minimo 3 e maximo 15!")
    private String name;

    @Positive(message = "O preço deve ser maior que zero!")
    private Double price;


    public ProductDTO() {
    }

    public ProductDTO(@NotNull RequestProduct product) {
        this.id = product.getId();
        this.name = product.getName();
        this.price = product.getPrice();
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




    @Override
    public String toString() {
        return "RequestProductDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", items=" + price +
                '}';
    }


}
