package com.example.milkHolanda.exceptions;

public class MethodArgumentNotValidException extends RuntimeException{

    public MethodArgumentNotValidException(String message) {
        super(message);
    }

    public MethodArgumentNotValidException(String message, Throwable cause) {
        super(message, cause);
    }
}
