package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.facade.ItemFacade;
import com.example.milkHolanda.populator.ItemPopulator;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.repository.ItemRepository;
import com.example.milkHolanda.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("itemFacade")
public class DefaultItemFacade implements ItemFacade {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ItemPopulator itemPopulator;

    @Override
        public void updateItem(ProductItemDTO itemDTO, Long id) {

        final boolean existsThisItem = itemRepository.existsById(id);

        if(existsThisItem) {
            ProductItem item = itemRepository.findById(id).get();

            item.setId(id);
            item.setQuantity(itemDTO.getQuantity());

            RequestProduct product = item.getProduct();

            Double price = product.getPrice();
            Integer quantity = item.getQuantity();

            if(price!=null && quantity != null) {
                item.setSubtotal(price * quantity);
            }

            itemRepository.save(item);
        }
    }
}
