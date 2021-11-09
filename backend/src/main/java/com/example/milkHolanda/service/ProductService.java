package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.pks.ClientProductDTO;

import java.util.List;

public interface ProductService {
    List<ProductDTO> findAll();

    void addProduct(ProductDTO productDTO);

    void addProductForClient(ClientProductDTO clientProductDTO);

    void updateproduct(Long id, ProductDTO productDTO);
}
