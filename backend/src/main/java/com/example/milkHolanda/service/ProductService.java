package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.RequestProductDTO;
import com.example.milkHolanda.dto.pks.ClientProductDTO;

import java.util.List;

public interface ProductService {
    List<RequestProductDTO> findAll();

    void addProduct(RequestProductDTO productDTO);

    void addProductForClient(ClientProductDTO clientProductDTO);
}
