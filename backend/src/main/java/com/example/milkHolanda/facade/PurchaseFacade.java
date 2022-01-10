package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.PurchaseDTO;
import com.example.milkHolanda.dto.pks.PurchaseProductDTO;

import java.util.List;

public interface PurchaseFacade {
    List<PurchaseDTO> findAll();

    void addPurchaseByClient(PurchaseProductDTO purchaseProductDTO);

    List<PurchaseDTO> findPurchasesByClient(String idClient);
}
