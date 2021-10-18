package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.ProductItemDTO;

public interface ItemService {
    void updateItem(ProductItemDTO itemDTO, String idClient);
}
