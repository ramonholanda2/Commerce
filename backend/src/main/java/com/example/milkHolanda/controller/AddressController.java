package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.facade.AddressFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/address")
public class AddressController {

    @Autowired
    private AddressFacade addressFacade;

    @PostMapping(path = "/save/{idClient}")
    public ResponseEntity<URI> addAddressForClient(@PathVariable String idClient, @Valid @RequestBody AddressClientDTO address) {

        addressFacade.addAddressClient(address, idClient);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .buildAndExpand().toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateAddressForClient(
            @PathVariable Long id,
            @Valid@RequestBody AddressClientDTO addressClient) {

        addressFacade.updateAddressByClient(id, addressClient);

        return ResponseEntity.noContent().build();
    }


    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteAddress(@PathVariable Long id) {

        addressFacade.deleteAddressById(id);

        return ResponseEntity.noContent().build();
    }

}
