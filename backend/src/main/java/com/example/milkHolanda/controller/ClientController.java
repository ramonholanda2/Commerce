package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.dto.ClientNewDTO;
import com.example.milkHolanda.exceptions.ObjectNotFoundException;
import com.example.milkHolanda.facade.ClientFacade;
import com.example.milkHolanda.service.ClientService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientFacade clientFacade;

    @GetMapping
    @ApiOperation(value="Busca todos os clientes")
    public ResponseEntity<List<ClientDTO>> getAllClients() {
        List<ClientDTO> clientDTOS = clientService.getAllClients();

        return ResponseEntity.ok().body(clientDTOS);
    }

    @GetMapping(path = "/{id}")
    @ApiOperation(value="Busca Cliente por id")
    public ResponseEntity<Object> getClientByCode(@PathVariable String id) {

        ClientDTO clientDTO = clientFacade.findClientById(id);

        return ResponseEntity.ok().body(clientDTO);
    }

    @PutMapping(path = "/update/{id}")
    @ApiOperation(value="Atualiza Cliente por id")
    public ResponseEntity<String> updateClientByCode(
            @PathVariable String id,
            @Valid @RequestBody ClientDTO clientDTO) {

        clientFacade.updateClient(id, clientDTO);

        return ResponseEntity.noContent().build();
    }

    @PostMapping
    @ApiOperation(value="Adiciona um novo Cliente")
    public ResponseEntity<URI> addClient(@Valid @RequestBody ClientNewDTO clientDTO) {

        if(clientDTO.getId() == null) {
            throw new ObjectNotFoundException("Id não encontrado!");
        }

        clientService.addClient(clientDTO);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(clientDTO.getId()).toUri();

        return ResponseEntity.ok().body(uri);
    }

    @DeleteMapping(path = "/delete/{id}")
    @ApiOperation(value="Deleta um Cliente por id")
    public ResponseEntity<String> removeClient(@PathVariable String id) {

        clientFacade.deleteClient(id);

        return ResponseEntity.noContent().build();
    }
}
