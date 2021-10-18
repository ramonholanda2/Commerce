package com.example.milkHolanda.dto;

import com.example.milkHolanda.entities.Client;

import java.util.ArrayList;
import java.util.List;

public class BusinessClientDTO {

    private String id;

    private String name;

    private List<ClientDTO> clients = new ArrayList<>();


    public BusinessClientDTO() {
    }

    public BusinessClientDTO(String id, String name, List<ClientDTO> clients) {
        this.id = id;
        this.name = name;
        this.clients = clients;
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

    public List<ClientDTO> getClients() {
        return clients;
    }

    public void setClients(List<ClientDTO> clients) {
        this.clients = clients;
    }

    @Override
    public String toString() {
        return "ClientDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
