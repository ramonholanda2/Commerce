package com.example.milkHolanda.populator;

import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.dto.RequestProductDTO;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.RequestProduct;

public interface ProductPopulator {

    RequestProduct addProduct(RequestProductDTO productDTO);

}
