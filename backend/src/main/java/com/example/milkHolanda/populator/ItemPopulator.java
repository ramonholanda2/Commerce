package com.example.milkHolanda.populator;

import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.entities.ProductItem;

public interface ItemPopulator {

    ProductItem updateItem(ProductItemDTO productItemDTO);


}
