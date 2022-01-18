package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.BusinessClientDTO;
import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.dto.ClientNewDTO;
import com.example.milkHolanda.entities.Client;

import java.util.List;

public interface ClientService {

    List<ClientDTO> getAllClients();

    Client getClientById(String id);

    BusinessClientDTO getBusinessClientById(String id);

    void addClient(ClientNewDTO clientDTO);

    void updateClient(String id, ClientDTO clientDTO);

    void deleteClient(String id);

}
