package com.example.milkHolanda.populator;

import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.entities.RequestProduct;

public interface ProductPopulator {

    RequestProduct addProduct(ProductDTO productDTO);

}
