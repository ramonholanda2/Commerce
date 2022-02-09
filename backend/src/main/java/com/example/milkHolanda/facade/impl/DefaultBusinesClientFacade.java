package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.*;
import com.example.milkHolanda.entities.AddressClient;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.entities.ProductItem;
import com.example.milkHolanda.entities.RequestProduct;
import com.example.milkHolanda.facade.BusinesClientFacade;
import com.example.milkHolanda.repository.AddressRepository;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.repository.ItemRepository;
import com.example.milkHolanda.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("businesClientFacade")
public class DefaultBusinesClientFacade implements BusinesClientFacade {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public BusinessClientDTO findBusinesClient(String id) {

        Client businessClient = clientRepository.findClientById(id);

        List<Client> clients = clientRepository.findAll();
        List<ClientDTO> clientDTOS = new ArrayList<>();

        for (Client client : clients) {

            if (client.getId() != businessClient.getId()) {

               List<AddressClient> addressModel = addressRepository.findAddressForClient(client.getId());
                List<RequestProduct> products = productRepository.findProductsByClientId(client.getId());

                ClientDTO clientDTO = convert(
                        client,
                        products,
                        addressModel
                );

                clientDTOS.add(clientDTO);
            }
        }

        BusinessClientDTO businessClientDTO =
                new BusinessClientDTO(businessClient.getId(), businessClient.getName(), clientDTOS);


        return businessClientDTO;

    }

    public ClientDTO convert(Client client, List<RequestProduct> products, List<AddressClient> address) {

        List<AddressClientDTO> addressClient = new ArrayList<>();

        for(AddressClient ad : address) {
            if(ad != null) {
                AddressClientDTO newAddress = new AddressClientDTO();
                newAddress.setId(ad.getId());
                newAddress.setComplement(ad.getComplement());
                newAddress.setNumber(ad.getNumber());
                newAddress.setCity(ad.getCity());
                newAddress.setCep(ad.getCep());
                newAddress.setStreet(ad.getStreet());
            }
        }


        List<RequestProductDTO> productDTOList = new ArrayList<>();

        if (products != null && !products.isEmpty()) {
            for (RequestProduct product : products) {

                ProductItem item = itemRepository.findItemForProduct(product.getId());

                if (item != null) {
                    RequestProductDTO productDTO =
                            new RequestProductDTO(
                                    product,
                                    item
                            );

                    productDTOList.add(productDTO);

                    break;
                }

                RequestProductDTO productDTO =
                        new RequestProductDTO(
                                product
                        );
                productDTOList.add(productDTO);

            }

        }

        ClientDTO clientDTO =
                new ClientDTO(client.getId(), client.getName(), client.getSurname(), client.getAdmin(), productDTOList, addressClient);

        return clientDTO;

    }

}
