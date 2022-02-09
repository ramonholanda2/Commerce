package com.example.milkHolanda.dto;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

public class ClientNewDTO implements Serializable {

    private String id;

    @NotBlank(message = "nome obrigatório!")
    private String name;

    @NotBlank(message = "sobrenome obrigatório!")
    private String surname;

    private Boolean isAdmin = false;

    public ClientNewDTO(String id, String name, String surname, Boolean idAdmin) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.isAdmin = idAdmin == null ? false : isAdmin;
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
}
