package com.example.milkHolanda.entities;

import com.example.milkHolanda.entities.enums.Role;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;
import java.util.stream.Collectors;

@Entity
@Table(name = "tb_client")
public class Client implements Serializable {

    @Id
    @Column(name = "id")
    private String id;

    private String name;

    private String surname;

    private Boolean isAdmin = false;

    @OneToMany(mappedBy = "client")
    private List<AddressClient> address;

    public Client() {
    }

    public Client(String id, String name, String surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    public Client(String id, String name, String surname, List<AddressClient> address, Boolean isAdmin) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.isAdmin = isAdmin;
    }

    public Client(String idClient, String clientName, String clientSurname, AddressClient addressClient) {
        this.id = idClient;
        this.name = clientName;
        this.surname = clientSurname;
        List<AddressClient> address = new ArrayList<>();
        address.add(addressClient);
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

    public List<AddressClient> getAddress() {
        return address;
    }

    public void setAddress(List<AddressClient> address) {
        this.address = address;
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
