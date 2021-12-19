package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.PurchaseDTO;
import com.example.milkHolanda.dto.pks.PurchaseProductDTO;
import com.example.milkHolanda.facade.PurchaseFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/purchases")
public class PurchaseController {

    @Autowired
    private PurchaseFacade purchaseFacade;

    @GetMapping
    public ResponseEntity<List<PurchaseDTO>> findPurchasesByClient() {

        List<PurchaseDTO> purchases = purchaseFacade.findAll();

        return ResponseEntity.ok().body(purchases);
    }

    @PostMapping
    public ResponseEntity<URI> addPurchasesByClient(@RequestBody PurchaseProductDTO purchaseProductDTO) {

        purchaseFacade.addPurchaseByClient(purchaseProductDTO);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .buildAndExpand().toUri();

        return ResponseEntity.created(uri).build();
    }
}