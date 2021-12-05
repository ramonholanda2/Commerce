package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.dto.RequestProductDTO;

import java.util.List;

public interface ProductFacade {
    List<ProductDTO> findAll();

    void addProduct(ProductDTO productDTO);

    void updateProductById(Long id, ProductDTO productDTO);

    void deleteProductById(Long id);

    List<RequestProductDTO> findProductsByClient(String idClient);
}
