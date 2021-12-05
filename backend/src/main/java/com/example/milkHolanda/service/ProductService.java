package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.entities.RequestProduct;

import java.util.List;

public interface ProductService {
    List<RequestProduct> findAll();

    void addProduct(ProductDTO productDTO);

    void updateProduct(Long id, ProductDTO productDTO);

    void deleteProductById(Long id);

    List<RequestProduct> findProductsByClient(String idClient);
}
