package com.example.milkHolanda.populator;

import com.example.milkHolanda.dto.PurchaseDTO;
import com.example.milkHolanda.entities.Purchase;

public interface PurchasePopulator {
    Purchase addPurchase(PurchaseDTO purchaseDTO);
}
