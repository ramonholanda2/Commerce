package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.BusinessClientDTO;
import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.facade.BusinesClientFacade;
import com.example.milkHolanda.facade.ClientFacade;
import com.example.milkHolanda.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service("clientService")
public class DefaultClientService implements ClientService {

    @Autowired
    private ClientFacade clientFacade;

    @Autowired
    private BusinesClientFacade businesClientFacade;

    @Override
    @Transactional(readOnly = true)
    public List<ClientDTO> getAllClients() {
        return clientFacade.findAllClients();
    }

    @Override
    public ClientDTO getClientById(String id) {
        return clientFacade.findClientById(id);
    }

    @Override
    public BusinessClientDTO getBusinessClientById(String id) {
        return businesClientFacade.findBusinesClient(id);
    }

    @Override
    public void addClient(ClientDTO clt) {
        clientFacade.addClient(clt);
    }

    @Override
    public void updateClient(String id, ClientDTO clientDTO) {
        clientFacade.updateClient(id, clientDTO);
    }

    @Override
    public void deleteClient(String id) {
        clientFacade.deleteClient(id);
    }

}
