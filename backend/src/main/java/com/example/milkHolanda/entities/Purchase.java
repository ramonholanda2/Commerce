package com.example.milkHolanda.entities;

import com.example.milkHolanda.entities.enums.PaymentStatus;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "tb_purchase")
public class Purchase implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer status;

    private Long idProduct;
    private String name;
    private Double price;
    private String urlImage;

    private Long idItem;
    private Integer quantity;
    private Double subtotal;

    private String idClient;
    private String clientName;
    private String clientSurname;

    private Long idAddress;
    private String street;
    private Integer number;
    private String complement;
    private String cep;
    private String city;

    public Purchase() {
    }

    public Purchase(Long id, PaymentStatus status,  RequestProduct product, ProductItem item, Client client, AddressClient addressClient) {
        this.id = id;
        this.status = (status == null) ? null : status.getCode();
        this.idProduct = product.getId();
        this.name = product.getName();
        this.price = product.getPrice();
        this.urlImage = product.getUrlImage();
        this.idItem = item.getId();
        this.quantity = item.getQuantity();
        this.subtotal = item.getSubtotal();
        this.idClient = client.getId();
        this.clientName = client.getName();
        this.clientSurname = client.getSurname();
        this.idAddress = addressClient.getId();
        this.street = addressClient.getStreet();
        this.number = addressClient.getNumber();
        this.complement = addressClient.getComplement();
        this.cep = addressClient.getCep();
        this.city = addressClient.getCity();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PaymentStatus getStatus() {
        return PaymentStatus.toEnum(status);
    }

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
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

    public void setStatus(PaymentStatus status) {
        this.status = status.getCode();
    }

    public Long getIdItem() {
        return idItem;
    }

    public void setIdItem(Long idItem) {
        this.idItem = idItem;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(Double subtotal) {
        this.subtotal = subtotal;
    }

    public String getIdClient() {
        return idClient;
    }

    public void setIdClient(String idClient) {
        this.idClient = idClient;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getClientSurname() {
        return clientSurname;
    }

    public void setClientSurname(String clientSurname) {
        this.clientSurname = clientSurname;
    }

    public Long getIdAddress() {
        return idAddress;
    }

    public void setIdAddress(Long idAddress) {
        this.idAddress = idAddress;
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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Purchase purchase = (Purchase) o;
        return Objects.equals(id, purchase.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
