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
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("clientFacade")
public class DefaultClientFacade implements ClientFacade {

    @Autowired
    private ClientRepository clientRepository;

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
        Client client = clientRepository.findClientById(id);

        AddressClient addressModel = addressRepository.findAddressForClient(client.getId());
        List<RequestProduct> products = productRepository.findProductsByClientId(client.getId());

        ClientDTO clientDTO =
                convert(client);

        return clientDTO;

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

        if(clientDTO != null && existsThisClient == 1) {

            Client client = clientPopulator.addClient(clientDTO);

            Client newClient = new Client(client.getId(), client.getName());
            newClient.setId(id);

            clientRepository.save(newClient);
        }
    }

    @Override
    public void deleteClient(String id) {

        long existsThisClient = clientRepository.existsByIdClient(id);

        if(existsThisClient == 1) {
            Client client = clientRepository.findClientById(id);

            long existsAddressForClient = addressRepository.existsAddressWithThisClient(id);

            if(existsAddressForClient == 1) {
                AddressClient address = addressRepository.findAddressForClient(id);
                addressRepository.delete(address);
            };

//            List<RequestProduct> productDTOS = productRepository.findProductsByClientId(id);
//            if(productDTOS!=null && !productDTOS.isEmpty()) {
//                for (RequestProduct product : productDTOS) {
//                    productRepository.delete(product);
//                }
//            }

            clientRepository.delete(client);

//            addressRepository.delete(client.getAddressClient());
        }
    }

    public ClientDTO convert(@NotNull Client client)
    {

        AddressClient address = addressRepository.findAddressForClient(client.getId());
        AddressClientDTO addressClient;

        if(address != null) {
            addressClient = new AddressClientDTO(address);
        } else {
            addressClient = new AddressClientDTO();
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
                new ClientDTO(client.getId(), client.getName(), productsDTO, addressClient);

        return clientDTO;

    }

}
