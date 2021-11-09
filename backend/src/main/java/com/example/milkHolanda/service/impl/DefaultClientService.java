package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.BusinessClientDTO;
import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.exceptions.DataIntegrityException;
import com.example.milkHolanda.exceptions.ObjectNotFoundException;
import com.example.milkHolanda.facade.BusinesClientFacade;
import com.example.milkHolanda.facade.ClientFacade;
import com.example.milkHolanda.populator.ClientPopulator;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("clientService")
public class DefaultClientService implements ClientService {

    @Autowired
    private ClientFacade clientFacade;

    @Autowired
    private ClientPopulator clientPopulator;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private BusinesClientFacade businesClientFacade;

    @Override
    @Transactional(readOnly = true)
    public List<ClientDTO> getAllClients() {
        return clientFacade.findAllClients();
    }

    @Override
    public Client getClientById(String id) {

        Client client = clientRepository.findClientById(id);

        if(client == null) {
            throw new ObjectNotFoundException("Cliente não encontrado!");
        }

        return client;
    }

    @Override
    public BusinessClientDTO getBusinessClientById(String id) {
        return businesClientFacade.findBusinesClient(id);
    }

    @Override
    public void addClient(ClientDTO clientDTO) {
        String idClient = clientDTO.getId().replace(" ", "");

        long existsClientWithThisId = clientRepository.existsByIdClient(idClient);

        if(existsClientWithThisId == 0 && idClient.intern() != "") {
            clientDTO.setId(idClient);
            Client client = clientPopulator.addClient(clientDTO);
            clientRepository.save(client);
        }

    }

    @Override
    public void updateClient(String id, ClientDTO clientDTO) {
        long existsThisClient = clientRepository.existsByIdClient(id);

        if(existsThisClient == 1) {

            Client client = clientPopulator.addClient(clientDTO);

            Client newClient = new Client(client.getId(), client.getName());
            newClient.setId(id);

            clientRepository.save(newClient);
        } else {
            throw new ObjectNotFoundException("Cliente não encontrado!");
        }
    }

    @Override
    public void deleteClient(String id) {
        try {
            long existsThisClient = clientRepository.existsByIdClient(id);

            if(existsThisClient == 1) {
                Client client = clientRepository.findClientById(id);
                clientRepository.delete(client);
            } else {
                throw new ObjectNotFoundException("Cliente não encontrado!");
            }
        }
        catch (DataIntegrityViolationException error) {
            throw new DataIntegrityException("Falha ao excluir cliente!");
        }
    }

}
