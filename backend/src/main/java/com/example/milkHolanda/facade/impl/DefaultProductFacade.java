package com.example.milkHolanda.facade.impl;
import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.RequestProductDTO;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.facade.ProductFacade;
import com.example.milkHolanda.repository.ItemRepository;
import com.example.milkHolanda.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("productFacade")
public class DefaultProductFacade implements ProductFacade {

    @Autowired
    private ProductService productService;

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public List<ProductDTO> findAll() {

        List<RequestProduct> products = productService.findAll();

        List<ProductDTO> productDTOS = new ArrayList<>();

        for (RequestProduct product : products) {

            ProductDTO productDTO = new ProductDTO(product);

            productDTOS.add(productDTO);

        }

        return productDTOS;
    }

    @Override
    public void addProduct(ProductDTO productDTO) {
        productService.addProduct(productDTO);
    }

    @Override
    public void updateProductById(Long id, ProductDTO productDTO) {
        productService.updateProduct(id, productDTO);
    }

    @Override
    public void deleteProductById(Long id) {
        productService.deleteProductById(id);
    }

    @Override
    public List<RequestProductDTO> findProductsByClient(String idClient) {

        List<RequestProduct> products = productService.findProductsByClient(idClient);

        List<RequestProductDTO> productDTOS = new ArrayList<>();

        for (RequestProduct product : products) {

            ProductItem item = itemRepository.findItemWithThisProductAndClient(product.getId(), idClient);

            RequestProductDTO requestProductDTO = new RequestProductDTO(product, item);

            productDTOS.add(requestProductDTO);

        }

        return productDTOS;
    }


}
