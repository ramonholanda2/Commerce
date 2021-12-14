package com.example.milkHolanda.populator.impl;
import com.example.milkHolanda.dto.PurchaseDTO;
import com.example.milkHolanda.entities.Purchase;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.populator.ProductPopulator;
import com.example.milkHolanda.populator.PurchasePopulator;
import com.example.milkHolanda.service.ModelMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;

@Service("purchasePopulator")
public class PurchaseProductPopulator implements PurchasePopulator {

    @Autowired
    private ModelMapperService modelMapperService;

    @Override
    public Purchase addPurchase(PurchaseDTO purchaseDTO) {
        return modelMapperService.modelMapper().map(purchaseDTO, (Type) RequestProduct.class);
    }
}
