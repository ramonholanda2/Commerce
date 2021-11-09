package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.BusinessClientDTO;
import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.exceptions.MethodArgumentNotValidException;
import com.example.milkHolanda.exceptions.ObjectNotFoundException;
import com.example.milkHolanda.facade.ClientFacade;
import com.example.milkHolanda.service.ClientService;
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
    public ResponseEntity<List<ClientDTO>> getAllClients() {
        List<ClientDTO> clientDTOS = clientService.getAllClients();

        return ResponseEntity.ok().body(clientDTOS);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Object> getClientByCode(@PathVariable String id) {

        if(id.intern() != "qwert") {

            ClientDTO clientDTO = clientFacade.findClientById(id);

//            ClientDTO clientDTO = clientService.getClientById(id);
            return ResponseEntity.ok().body(clientDTO);
        }

        BusinessClientDTO businessclientDTO = clientService.getBusinessClientById(id);

        return ResponseEntity.ok().body(businessclientDTO);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateClientByCode(
            @PathVariable String id,
            @Valid @RequestBody ClientDTO clientDTO) {

        clientFacade.updateClient(id, clientDTO);

//        clientService.updateClient(id, clientDTO);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/save")
    public ResponseEntity<URI> addClient(@Valid @RequestBody ClientDTO clientDTO) {

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
    public ResponseEntity<String> removeClient(@PathVariable String id) {

        clientFacade.deleteClient(id);

//        clientService.deleteClient(id);

        return ResponseEntity.ok().body("Cliente Removido com sucesso!");
    }
}
