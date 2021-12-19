package com.example.milkHolanda.entities.enums;

public enum PaymentStatus {
    PENDENTE(1, "Pendente"),
    ANDAMENTO(2, "Em Andamento"),
    CONCLUIDO(3, "Concluído");

    private int code;
    private String description;

    PaymentStatus(int code, String description) {
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

    public static PaymentStatus toEnum(Integer cod) {
        if(cod == null) return null;

        for (PaymentStatus x : PaymentStatus.values()) {
            if(cod.equals(x.getCode())) {
                return x;
            }
        }
        return null;
    }
}
