package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.pks.ClientProductDTO;

import java.util.List;

public interface ProductFacade {
    List<ProductDTO> findAll();

    void addProduct(ProductDTO productDTO);

    void addProductForClient(ClientProductDTO clientProductDTO);

    void updateProductById(Long id, ProductDTO productDTO);
}
