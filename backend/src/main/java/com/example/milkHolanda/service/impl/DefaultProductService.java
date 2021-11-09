package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.pks.ClientProductDTO;
import com.example.milkHolanda.facade.ProductFacade;
import com.example.milkHolanda.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("productService")
public class DefaultProductService implements ProductService {

    @Autowired
    private ProductFacade productFacade;

    @Override
    public List<ProductDTO> findAll() {
        return productFacade.findAll();
    }

    @Override
    public void addProduct(ProductDTO productDTO) {
        productFacade.addProduct(productDTO);
    }

    @Override
    public void addProductForClient(ClientProductDTO clientProductDTO) {
        productFacade.addProductForClient(clientProductDTO);
    }

    @Override
    public void updateproduct(Long id, ProductDTO productDTO) {
        productFacade.updateProductById(id, productDTO);
    }
}
