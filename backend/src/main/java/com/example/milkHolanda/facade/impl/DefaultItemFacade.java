package com.example.milkHolanda.facade.impl;
import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.facade.ItemFacade;
import com.example.milkHolanda.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("itemFacade")
public class DefaultItemFacade implements ItemFacade {

    @Autowired
    private ItemService itemService;

    @Override
    public void updateItem(ProductItemDTO itemDTO, Long id) {
        itemService.updateItem(itemDTO, id);

    }
}
