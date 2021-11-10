package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.ProductDTO;

import java.util.List;

public interface ProductFacade {
    List<ProductDTO> findAll();

    void addProduct(ProductDTO productDTO);

    void updateProductById(Long id, ProductDTO productDTO);

    void deleteProductById(Long id);

}
