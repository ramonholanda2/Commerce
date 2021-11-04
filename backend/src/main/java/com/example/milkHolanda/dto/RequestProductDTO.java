package com.example.milkHolanda.dto;

import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import org.jetbrains.annotations.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;


public class RequestProductDTO {

    private Long id;

    @Size(min = 3, max = 15, message = "Valor minimo 3 e maximo 15!")
    private String name;

    @Positive(message = "O preço deve ser maior que zero!")
    private Double price;

    private ProductItem items;

    public RequestProductDTO() {
    }

    public RequestProductDTO(@NotNull RequestProduct product, @NotNull ProductItem items) {
        this.id = product.getId();
        this.name = product.getName();
        this.items = items;
        this.price = product.getPrice();
    }

    public RequestProductDTO(@NotNull RequestProduct product) {
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

    public ProductItem getItems() {
        return items;
    }

    public void setItems(ProductItem items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "RequestProductDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", items=" + price +
                ", items=" + items +
                '}';
    }
}
