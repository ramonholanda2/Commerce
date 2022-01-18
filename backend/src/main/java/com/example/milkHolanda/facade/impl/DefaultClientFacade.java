package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.*;
import com.example.milkHolanda.entities.AddressClient;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.facade.ClientFacade;
import com.example.milkHolanda.populator.ClientPopulator;
import com.example.milkHolanda.repository.AddressRepository;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.repository.ItemRepository;
import com.example.milkHolanda.repository.ProductRepository;
import com.example.milkHolanda.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("clientFacade")
public class DefaultClientFacade implements ClientFacade {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ClientService clientService;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private ClientPopulator clientPopulator;

    @Override
    public List<ClientDTO> findAllClients() {

        List<Client> clients = clientRepository.findAll();

        List<ClientDTO> clientDTOS = new ArrayList<>();

        for (Client client : clients) {

            ClientDTO clientDTO = convert(client);

            clientDTOS.add(clientDTO);
        }

        return clientDTOS;

    }

    @Override
    public ClientDTO findClientById(String id) {

        Client client = clientService.getClientById(id);

        ClientDTO clientDTO =
                convert(client);

        return clientDTO;

    }

    @Override
    public void addClient(ClientNewDTO clientDTO) {

        clientService.addClient(clientDTO);
    }

    @Override
    public void updateClient(String id, ClientDTO clientDTO) {
        clientService.updateClient(id, clientDTO);
    }

    @Override
    public void deleteClient(String id) {
        clientService.deleteClient(id);
    }

    public ClientDTO convert(Client client)
    {

        List<AddressClient> address = addressRepository.findAddressForClient(client.getId());

        List<AddressClientDTO> addressClient = new ArrayList<>();

        for(AddressClient ad : address) {
            if(ad != null) {
                AddressClientDTO newAddress = new AddressClientDTO(ad);
                addressClient.add(newAddress);
            }
        }


        List<RequestProduct> products = productRepository.findProductsByClientId(client.getId());
        List<RequestProductDTO> productsDTO = new ArrayList<>();

        if (products != null && !products.isEmpty()) {
            for (RequestProduct product : products) {
                ProductItem item = itemRepository
                        .findItemForProductAndClient(product.getId(), client.getId());
                RequestProductDTO productDTO;
                
                if(item != null) {

                    productDTO = new RequestProductDTO(
                            product,
                            item
                    );

                } else {
                    productDTO = new RequestProductDTO(product);
                }

                productsDTO.add(productDTO);
            }
        }

        ClientDTO clientDTO =
                new ClientDTO(client.getId(), client.getName(), client.getSurname(), productsDTO, addressClient);

        return clientDTO;

    }

}
