package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.PurchaseDTO;
import com.example.milkHolanda.dto.pks.PurchaseProductDTO;
import com.example.milkHolanda.entities.*;
import com.example.milkHolanda.facade.PurchaseFacade;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("purchaseFacade")
public class DefaultPurchaseFacade implements PurchaseFacade {

    @Autowired
    private PurchaseService purchaseService;

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public List<PurchaseDTO> findAll() {
        List<Purchase> purchases = purchaseService.findAll();

        List<PurchaseDTO> purchaseDTOS = new ArrayList<>();


        for (Purchase purchase : purchases) {

            ProductItem item = new ProductItem(purchase.getIdItem(), purchase.getQuantity(), purchase.getSubtotal());
            RequestProduct product = new RequestProduct(purchase.getIdProduct(), purchase.getName(), purchase.getPrice(), purchase.getUrlImage(), item);

            AddressClient addressClient = new AddressClient(purchase.getIdAddress(), purchase.getStreet(), purchase.getNumber(), purchase.getComplement(), purchase.getCep(), purchase.getCity());
            Client client = new Client(purchase.getIdClient(), purchase.getClientName(), purchase.getClientSurname(), addressClient);

            PurchaseDTO purchaseDTO = new PurchaseDTO(purchase.getId(), purchase.getStatus(), product, client);

            purchaseDTOS.add(purchaseDTO);
        }

        return purchaseDTOS;
    }

    @Override
    public void addPurchaseByClient(PurchaseProductDTO purchaseProductDTO) {
        purchaseService.addPurchaseByClient(purchaseProductDTO);
    }

}
