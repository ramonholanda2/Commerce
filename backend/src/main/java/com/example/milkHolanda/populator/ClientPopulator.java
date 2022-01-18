package com.example.milkHolanda.populator;

import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.dto.ClientNewDTO;
import com.example.milkHolanda.entities.Client;

public interface ClientPopulator {

    Client addClient(ClientNewDTO clientDTO);
    Client addClient(ClientDTO clientDTO);

}
