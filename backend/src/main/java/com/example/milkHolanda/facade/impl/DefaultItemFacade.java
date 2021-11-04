package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.facade.ItemFacade;
import com.example.milkHolanda.populator.ItemPopulator;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.repository.ItemRepository;
import com.example.milkHolanda.repository.ProductRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        public void updateItem(ProductItemDTO itemDTO, String idClient) {

        ProductItem productItem = itemPopulator.updateItem(itemDTO);

        Long idProduct = itemDTO.getProduct().getId();

        if(idProduct != null) {

            long existsMoreOneItemForClientProduct =
                    itemRepository.countItemForClientAndProduct(idClient, idProduct);
            long existsThisClient = existsClient(idClient);
            if(existsThisClient != 1
                    ||
                    (existsMoreOneItemForClientProduct == 1
                            && itemDTO.getId() == null)) return;

            RequestProduct product = getProduct(idProduct);

            if(existsMoreOneItemForClientProduct >= 1 && itemDTO.getClient().getId() != null) {
                productItem.setId(itemDTO.getId());
                productItem.getClient().setId(idClient);
            }

            Double price = product.getPrice();
            Integer quantity = productItem.getQuantity();

            if(price!=null && quantity != null) {
                productItem.setSubtotal(price * quantity);
            }

            itemRepository.save(productItem);
        }
    }

    private @NotNull RequestProduct getProduct(Long idProduct) {
        return productRepository.findById(idProduct).get();
    }

    private long existsClient(String idClient) {
        return clientRepository.existsByIdClient(idClient);
    }
}
