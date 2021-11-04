package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.service.AddressService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping(path = "/save")
    public ResponseEntity<String> addAddressForClient(@RequestBody @Valid AddressClientDTO address, @NotNull BindingResult bindingResult) {

        if(bindingResult.hasErrors()){
            return ResponseEntity.badRequest().body("Campos do endereço preencidos incorretamente!");
        }

        addressService.addAddressForClient(address);

        return ResponseEntity.ok().body("endereço criado com sucesso");
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateAddressForClient(
            @PathVariable Long id,
            @Valid@RequestBody AddressClientDTO addressClient,
            @NotNull BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body("Campos inválidos para atualização do endereço!");
        }

        addressService.updateAddressForClient(id, addressClient);

        return ResponseEntity.ok().body("Endereço atualizado com sucesso!");
    }


    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteAddress(@PathVariable Long id) {

        addressService.deleteAddressById(id);

        return ResponseEntity.ok().body("Endereço deletado com sucesso!");
    }

}
