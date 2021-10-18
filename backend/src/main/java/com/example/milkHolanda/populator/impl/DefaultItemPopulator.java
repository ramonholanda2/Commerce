package com.example.milkHolanda.populator.impl;

import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.populator.ItemPopulator;
import com.example.milkHolanda.service.ModelMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("itemPopulator")
public class DefaultItemPopulator implements ItemPopulator {

    @Autowired
    private ModelMapperService modelMapperService;

    @Override
    public ProductItem updateItem(ProductItemDTO productItemDTO) {
        return modelMapperService.modelMapper().map(productItemDTO, ProductItem.class);
    }
}
