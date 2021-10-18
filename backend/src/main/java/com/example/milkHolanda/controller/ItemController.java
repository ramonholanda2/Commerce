package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/item")
public class ItemController {

    @Autowired
    private ItemService itemService;


    @PostMapping(value = "/{idClient}/update")
    public ResponseEntity<String> updateItemProduct(@RequestBody ProductItemDTO itemDTO,
                                                    @PathVariable String idClient) {

        itemService.updateItem(itemDTO, idClient);

        return ResponseEntity.ok().body("Item Adicionado/Atualizado");
    }

}
