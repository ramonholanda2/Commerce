package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.pks.PurchaseProductDTO;
import com.example.milkHolanda.entities.*;
import com.example.milkHolanda.entities.enums.PaymentStatus;
import com.example.milkHolanda.exceptions.ObjectNotFoundException;
import com.example.milkHolanda.repository.*;
import com.example.milkHolanda.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("purchaseService")
public class DefaultPurchaseService implements PurchaseService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PurchaseRepository purchaseRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public List<Purchase> findAll() {
        return purchaseRepository.findAll();
    }

    @Override
    public void addPurchaseByClient(PurchaseProductDTO purchaseProductDTO) {

        String idClient = purchaseProductDTO.getIdClient();
        Long idProduct = purchaseProductDTO.getIdProduct();
        long idAddress = purchaseProductDTO.getIdAddress();

        Boolean existsProduct = productRepository.existsById(idProduct);
        long existsClient = clientRepository.existsByIdClient(idClient);
        boolean existsAddress = addressRepository.existsById(idAddress);

        if(!existsProduct) {
            throw new ObjectNotFoundException("Produto não encontrado!");
        } else if (existsClient != 1) {
            throw new ObjectNotFoundException("Cliente não encontrado!");
        } else if(!existsAddress) {
            throw new ObjectNotFoundException("Endereço não encontrado!");
        }

        RequestProduct product = productRepository.findById(idProduct).get();
        Client client = clientRepository.findClientById(idClient);
        AddressClient addressClient = addressRepository.findById(idAddress).get();
        ProductItem item = itemRepository.findItemWithThisProductAndClient(idProduct, idClient);

        Purchase purchase = new Purchase(null, PaymentStatus.PENDENTE, product, item, client, addressClient);

        purchaseRepository.save(purchase);
    }

}
