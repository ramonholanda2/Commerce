package com.example.milkHolanda.facade.impl;
import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.pks.ClientProductDTO;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.facade.ProductFacade;
import com.example.milkHolanda.populator.ProductPopulator;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.repository.ItemRepository;
import com.example.milkHolanda.repository.ProductRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("productFacade")
public class DefaultProductFacade implements ProductFacade {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ProductPopulator productPopulator;

    @Override
    public List<ProductDTO> findAll() {
        List<RequestProduct> products = productRepository.findAll();

        List<ProductDTO> productDTOS = new ArrayList<>();

        for (RequestProduct product : products) {

            ProductDTO productDTO = new ProductDTO(product);

            productDTOS.add(productDTO);

        }

        return productDTOS;
    }

    @Override
    public void addProduct(ProductDTO productDTO) {
        RequestProduct product = productPopulator.addProduct(productDTO);

        productRepository.save(product);
    }

    @Override
    public void addProductForClient(@NotNull ClientProductDTO clientProductDTO) {

        String idClient = clientProductDTO.getIdClient();
        long idProduct = clientProductDTO.getIdProduct();

        Boolean existsProduct = productRepository.existsById(idProduct);
        long existsClient = clientRepository.existsByIdClient(idClient);

        if(!existsProduct || existsClient != 1 ) {
            return;
        }

        long existsProductWithClient = productRepository.existsProductWithClient(idClient, idProduct);

        if(existsProductWithClient >= 1) {
            return;
        }

        ProductItem item = addItemToProduct(idClient, idProduct);

        productRepository.addProductWithClient(idClient, idProduct);

        if(item !=null) {
            itemRepository.save(item);
        }

    }

    @Override
    public void updateProductById(Long id, ProductDTO productDTO) {

        boolean existsThisProduct = productRepository.existsById(id);

        if(existsThisProduct){

            RequestProduct newProduct = productRepository.findById(id).get();

            newProduct.setId(id);
            newProduct.setName(productDTO.getName());
            newProduct.setPrice(productDTO.getPrice());

            List<ProductItem> items = itemRepository.findAllItemsWithThisProduct(id);

            if(!items.isEmpty() && items != null) {
                for (ProductItem item : items) {
                    item.setSubtotal(newProduct.getPrice() * item.getQuantity());
                }

                items.stream().map(x -> itemRepository.save(x));
            }

            productRepository.save(newProduct);
        }
    }


    public ProductItem addItemToProduct(String idClient, Long idProduct) {

        RequestProduct product = productRepository.findById(idProduct).get();
        Client client = clientRepository.findClientById(idClient);

        ProductItem productItem = new ProductItem();
        Double price = product.getPrice();

        productItem.setProduct(product);
        productItem.setClient(client);

        if(price != null) {
            productItem.setQuantity(1);
            productItem.setSubtotal(price);
        }

        return productItem;
    }


}
