package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.BusinessClientDTO;
import com.example.milkHolanda.dto.ClientDTO;

import java.util.List;

public interface ClientFacade {

    List<ClientDTO> findAllClients();

    ClientDTO findClientById(String id);

    void addClient(ClientDTO clt);

    void updateClient(String id, ClientDTO clientDTO);

    void deleteClient(String id);

}
