package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.pks.ClientProductDTO;
import com.example.milkHolanda.facade.ClientProductFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/client-product")
public class ClientProductController {

    @Autowired
    private ClientProductFacade clientProductFacade;

    @RequestMapping(method = RequestMethod.POST, path = "/add-product-by-client")
    public ResponseEntity<URI> addProductForClient(@Valid @RequestBody ClientProductDTO clientProductDTO) {

        clientProductFacade.addProductForClient(clientProductDTO);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .buildAndExpand().toUri();

        return ResponseEntity.created(uri).build();
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/remove-product-by-client")
    public ResponseEntity removeProductForClient(@Valid @RequestBody ClientProductDTO clientProductDTO) {
        clientProductFacade.removeProductForClient(clientProductDTO);

        return ResponseEntity.noContent().build();
    }

}
