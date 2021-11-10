package com.example.milkHolanda.dto;

import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;


public class RequestProductDTO {

    private Long id;

    @Length(min = 3, max = 15, message = "Tamanho minimo 3 e maximo 15!")
    private String name;

    @NotNull(message = "O preço é obrigatório!")
    @Positive(message = "O preço deve ser maior que zero!")
    private Double price;

    private ProductItem item;

    public RequestProductDTO() {
    }

    public RequestProductDTO(RequestProduct product, ProductItem item) {
        this.id = product.getId();
        this.name = product.getName();
        this.item = item;
        this.price = product.getPrice();
    }

    public RequestProductDTO(RequestProduct product) {
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

    public ProductItem getItem() {
        return item;
    }

    public void setItem(ProductItem item) {
        this.item = item;
    }

    @Override
    public String toString() {
        return "RequestProductDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", items=" + price +
                ", items=" + item +
                '}';
    }
}
