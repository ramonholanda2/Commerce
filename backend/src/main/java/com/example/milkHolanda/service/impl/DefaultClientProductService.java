package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.pks.ClientProductDTO;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.exceptions.DataIntegrityException;
import com.example.milkHolanda.exceptions.ObjectNotFoundException;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.repository.ItemRepository;
import com.example.milkHolanda.repository.ProductRepository;
import com.example.milkHolanda.service.ClientProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service("clientProductService")
public class DefaultClientProductService implements ClientProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ItemRepository itemRepository;


    @Override
    public void addProductForClient(ClientProductDTO clientProductDTO) {

        String idClient = clientProductDTO.getIdClient();
        long idProduct = clientProductDTO.getIdProduct();

        Boolean existsProduct = productRepository.existsById(idProduct);
        long existsClient = clientRepository.existsByIdClient(idClient);

        if(!existsProduct) {
            throw new ObjectNotFoundException("Produto não encontrado!");
        } else if (existsClient != 1) {
            throw new ObjectNotFoundException("Cliente não encontrado!");
        }

        long existsProductWithClient = productRepository.existsProductWithClient(idClient, idProduct);

        if(existsProductWithClient >= 1) {
            throw new DataIntegrityException("Esse produto já está adicionado!");
        }

        ProductItem item = addItemToProduct(idClient, idProduct);

        productRepository.addProductWithClient(idClient, idProduct);

        if(item !=null) {
            itemRepository.save(item);
        }
    }

    @Override
    public void removeProductForClient(ClientProductDTO clientProductDTO) {

        try {
            String idClient = clientProductDTO.getIdClient();
            long idProduct = clientProductDTO.getIdProduct();

            long existsProductWithClient = productRepository.existsProductWithClient(idClient, idProduct);

            if(existsProductWithClient != 1) {
                throw new DataIntegrityException("Esse produto não está associado ao cliente!");
            }

            ProductItem item = itemRepository.findItemWithThisProductAndClient(idProduct, idClient);
            itemRepository.delete(item);

            productRepository.removeProductWithClient(idClient, idProduct);
        }
        catch (DataIntegrityViolationException error) {
            throw new DataIntegrityException("Erro ao exluir produto do cliente!");
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
