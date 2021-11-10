package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.pks.ClientProductDTO;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.exceptions.DataIntegrityException;
import com.example.milkHolanda.exceptions.ObjectNotFoundException;
import com.example.milkHolanda.facade.ProductFacade;
import com.example.milkHolanda.populator.ProductPopulator;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.repository.ItemRepository;
import com.example.milkHolanda.repository.ProductRepository;
import com.example.milkHolanda.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("productService")
public class DefaultProductService implements ProductService {

    @Autowired
    private ProductFacade productFacade;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ProductPopulator productPopulator;

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public List<RequestProduct> findAll() {
        return productRepository.findAll();
    }

    @Override
    public void addProduct(ProductDTO productDTO) {
        RequestProduct product = productPopulator.addProduct(productDTO);
        productRepository.save(product);
    }

    @Override
    public void updateProduct(Long id, ProductDTO productDTO) {
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

                items.stream().map(item -> itemRepository.save(item));
            }

            productRepository.save(newProduct);
        } else {
            throw new ObjectNotFoundException("Este produto não existe!");
        }
    }

    @Override
    public void deleteProductById(Long id) {
        try {
            boolean existsThisProduct = productRepository.existsById(id);

            if(existsThisProduct) {

                productRepository.removeProductClientByProduct(id);

                List<ProductItem> itens = itemRepository.findAllItemsWithThisProduct(id);
                itens.stream().forEach(item -> itemRepository.delete(item));

                productRepository.deleteById(id);
            } else {
                throw new ObjectNotFoundException("Este produto não existe!");
            }
        }
        catch (DataIntegrityViolationException error) {
            throw new DataIntegrityException("Falha ao excluir cliente!");
        }
    }
}
