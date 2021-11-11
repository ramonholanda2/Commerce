package com.example.milkHolanda.service.impl;
import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.repository.ItemRepository;
import com.example.milkHolanda.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("itemService")
public class DefaultItemService implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

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
