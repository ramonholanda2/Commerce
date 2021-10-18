package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.RequestProductDTO;
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
    public List<RequestProductDTO> findAll() {
        return productFacade.findAll();
    }

    @Override
    public void addProduct(RequestProductDTO productDTO) {
        productFacade.addProduct(productDTO);
    }

    @Override
    public void addProductForClient(ClientProductDTO clientProductDTO) {
        productFacade.addProductForClient(clientProductDTO);
    }
}
