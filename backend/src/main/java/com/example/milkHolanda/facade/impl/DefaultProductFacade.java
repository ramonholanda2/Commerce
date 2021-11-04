package com.example.milkHolanda.facade.impl;
import com.example.milkHolanda.dto.RequestProductDTO;
import com.example.milkHolanda.dto.pks.ClientProductDTO;

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
    public List<RequestProductDTO> findAll() {
        List<RequestProduct> products = productRepository.findAll();

        List<RequestProductDTO> productDTOS = new ArrayList<>();

        for (RequestProduct product : products) {

            ProductItem item = itemRepository.findItemForProduct(product.getId());

            RequestProductDTO productDTO;

            if(item != null) {

                productDTO = new RequestProductDTO(product, item);

            } else {
                productDTO = new RequestProductDTO(product);
            }
            productDTOS.add(productDTO);


        }

        return productDTOS;
    }

    @Override
    public void addProduct(RequestProductDTO productDTO) {
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

        productRepository.addProductWithClient(idClient, idProduct);

    }

    @Override
    public void updateProductById(Long id, RequestProductDTO productDTO) {

        boolean existsThisProduct = productRepository.existsById(id);

        if(existsThisProduct){

            RequestProduct newProduct = productRepository.findById(id).get();

            newProduct.setId(id);
            newProduct.setName(productDTO.getName());
            newProduct.setPrice(productDTO.getPrice());

            productRepository.save(newProduct);
        }
    }


}
