package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.facade.AddressFacade;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/address")
public class AddressController {

    @Autowired
    private AddressFacade addressFacade;

    @GetMapping(value = "/{idClient}")
    @ApiOperation(value="Busca endereços de um cliente")
    private ResponseEntity<List<AddressClientDTO>> getAddressesByClient(@PathVariable String idClient) {
        return addressFacade.getAddressesByClient(idClient);
    }

    @GetMapping
    @ApiOperation(value="Busca um endereço de um cliente")
    private ResponseEntity<AddressClientDTO> getAddressByClient(@RequestParam(value = "idClient") String idClient, @RequestParam(value = "idAddress") Long idAddress) {
        return addressFacade.getAddressByClient(idClient, idAddress);
    }


    @PostMapping(path = "/save/{idClient}")
    @ApiOperation(value="Adiciona um endereço para um cliente")
    public ResponseEntity<URI> addAddressForClient(@PathVariable String idClient, @Valid @RequestBody AddressClientDTO address) {

        addressFacade.addAddressClient(address, idClient);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .buildAndExpand().toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping(path = "/update/{id}")
    @ApiOperation(value="Atualiza um endereço por id")
    public ResponseEntity<String> updateAddressForClient(
            @PathVariable Long id,
            @Valid@RequestBody AddressClientDTO addressClient) {

        addressFacade.updateAddressByClient(id, addressClient);

        return ResponseEntity.noContent().build();
    }


    @DeleteMapping(path = "/delete/{id}")
    @ApiOperation(value="Deleta um endereço por id")
    public ResponseEntity<String> deleteAddress(@PathVariable Long id) {

        addressFacade.deleteAddressById(id);

        return ResponseEntity.noContent().build();
    }

}
