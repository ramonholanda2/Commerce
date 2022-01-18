package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.PurchaseDTO;
import com.example.milkHolanda.dto.pks.PurchaseProductDTO;
import com.example.milkHolanda.entities.Purchase;
import com.example.milkHolanda.facade.PurchaseFacade;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/purchases")
public class PurchaseController {

    @Autowired
    private PurchaseFacade purchaseFacade;

    @GetMapping
    @ApiOperation(value="Busca todas as compras")
    public ResponseEntity<List<PurchaseDTO>> findPurchases() {

        List<PurchaseDTO> purchases = purchaseFacade.findAll();

        return ResponseEntity.ok().body(purchases);
    }

    @GetMapping(path = "/{idClient}")
    @ApiOperation(value="Busca as compras de um cliente")
    public ResponseEntity<List<PurchaseDTO>> findPurchasesByIdClient(@PathVariable String idClient) {
        List<PurchaseDTO> purchases = purchaseFacade.findPurchasesByClient(idClient);

        return ResponseEntity.ok().body(purchases);
    }

    @PostMapping
    @ApiOperation(value="Adiciona um nova compra")
    public ResponseEntity<URI> addPurchasesByClient(@Valid @RequestBody PurchaseProductDTO purchaseProductDTO) {

        purchaseFacade.addPurchaseByClient(purchaseProductDTO);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .buildAndExpand().toUri();

        return ResponseEntity.created(uri).build();
    }
}
