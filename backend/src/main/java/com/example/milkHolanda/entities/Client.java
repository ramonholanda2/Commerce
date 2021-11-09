package com.example.milkHolanda.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tb_client")
public class Client implements Serializable {

    @Id
    @Column(name = "id")
    private String id;

    private String name;

    @OneToOne(mappedBy = "client")
    private AddressClient address;

    @ManyToMany(mappedBy = "client")
    private List<RequestProduct> products = new ArrayList<>();

    public Client() {
    }

    public Client(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public Client(String id, String name, AddressClient address, List<RequestProduct> products) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.products = products;
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

    public AddressClient getAddress() {
        return address;
    }

    public void setAddress(AddressClient address) {
        this.address = address;
    }

    public List<RequestProduct> getProducts() {
        return products;
    }

    public void setProducts(List<RequestProduct> products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", address=" + address +
                ", products=" + products +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Client client = (Client) o;
        return id.equals(client.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
