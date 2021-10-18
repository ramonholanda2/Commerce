package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.facade.ItemFacade;
import com.example.milkHolanda.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("itemService")
public class DefaultItemService implements ItemService {

    @Autowired
    private ItemFacade itemFacade;

    @Override
    public void updateItem(ProductItemDTO itemDTO, String idClient) {

        itemFacade.updateItem(itemDTO, idClient);

    }
}
