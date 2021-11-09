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


    @PostMapping(value = "/update/{id}")
    public ResponseEntity<String> updateItemProduct(@RequestBody ProductItemDTO itemDTO,
                                                    @PathVariable Long id) {

        itemService.updateItem(itemDTO, id);

        return ResponseEntity.ok().body("Item Adicionado/Atualizado");
    }

}
