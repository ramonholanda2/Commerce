package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.BusinessClientDTO;
import com.example.milkHolanda.dto.ClientDTO;

import java.util.List;

public interface ClientService {

    List<ClientDTO> getAllClients();

    ClientDTO getClientById(String id);

    BusinessClientDTO getBusinessClientById(String id);

    void addClient(ClientDTO clientDTO);

    void updateClient(String id, ClientDTO clientDTO);

    void deleteClient(String id);

}
