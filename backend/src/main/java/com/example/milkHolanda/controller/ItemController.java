package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.facade.ItemFacade;
import com.example.milkHolanda.service.ItemService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/item")
public class ItemController {

    @Autowired
    private ItemFacade itemFacade;

    @PostMapping(value = "/update/{id}")
    @ApiOperation(value="Atualiza um item por id")
    public ResponseEntity updateItemProduct(@Valid @RequestBody ProductItemDTO itemDTO,
                                                    @PathVariable Long id) {
        itemFacade.updateItem(itemDTO, id);
        return ResponseEntity.noContent().build();
    }

}
