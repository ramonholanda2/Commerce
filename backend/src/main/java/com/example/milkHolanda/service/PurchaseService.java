package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.pks.PurchaseProductDTO;
import com.example.milkHolanda.entities.Purchase;

import java.util.List;

public interface PurchaseService {
    List<Purchase> findAll();

    void addPurchaseByClient(PurchaseProductDTO purchaseProductDTO);

}
