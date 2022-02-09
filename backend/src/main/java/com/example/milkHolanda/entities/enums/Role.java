package com.example.milkHolanda.entities.enums;

public enum Role {
    CLIENT(1, "Cliente"),
    ADMIN(2, "Administrador");

    private int code;
    private String description;

    Role(int code, String description) {
        this.code = code;
        this.description = description;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public static Role toEnum(Integer cod) {
        if(cod == null) return null;

        for (Role x : Role.values()) {
            if(cod.equals(x.getCode())) {
                return x;
            }
        }
        return null;
    }
}
