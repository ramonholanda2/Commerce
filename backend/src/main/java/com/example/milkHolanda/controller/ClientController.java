package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.BusinessClientDTO;
import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.service.ClientService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<List<ClientDTO>> getAllClients() {
        List<ClientDTO> clientDTOS = clientService.getAllClients();

        return ResponseEntity.ok().body(clientDTOS);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Object> getClientByCodes(@PathVariable @NotNull String id) {

        if(id.intern() != "qwert") {
            ClientDTO clientDTO = clientService.getClientById(id);
            return ResponseEntity.ok().body(clientDTO);
        }

        BusinessClientDTO businessclientDTO = clientService.getBusinessClientById(id);

        return ResponseEntity.ok().body(businessclientDTO);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateClientByCode(
            @PathVariable String id,
            @Valid @RequestBody ClientDTO clientDTO,
            @NotNull BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body("Existem Campos inválidos!");
        }

        clientService.updateClient(id, clientDTO);

        return ResponseEntity.ok().body("Atualizado Com Sucesso!");
    }

    @PostMapping("/save")
    public ResponseEntity<String> addClient(@Valid @RequestBody ClientDTO cli, @NotNull BindingResult result) {

        if(result.hasErrors()) {

            return ResponseEntity.badRequest().body("Campos inválidos!");
        }

        clientService.addClient(cli);

        return ResponseEntity.ok().body("Cliente adicionado!!!");
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> removeClient(@PathVariable String id) {

        clientService.deleteClient(id);

        return ResponseEntity.ok().body("Cliente Removido com sucesso!");
    }
}
