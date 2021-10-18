package com.example.milkHolanda.populator.impl;
import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.dto.RequestProductDTO;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.populator.ClientPopulator;
import com.example.milkHolanda.populator.ProductPopulator;
import com.example.milkHolanda.service.ModelMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("productPopulator")
public class DefaultProductPopulator implements ProductPopulator {

    @Autowired
    private ModelMapperService modelMapperService;

    @Override
    public RequestProduct addProduct(RequestProductDTO productDTO) {
        return modelMapperService.modelMapper().map(productDTO, RequestProduct.class);
    }
}
