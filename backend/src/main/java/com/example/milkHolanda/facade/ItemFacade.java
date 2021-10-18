package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.ProductItemDTO;

public interface ItemFacade {
    void updateItem(ProductItemDTO itemDTO, String idClient);
}
