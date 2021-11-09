package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.entities.AddressClient;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.facade.AddressFacade;
import com.example.milkHolanda.populator.AddressPopulator;
import com.example.milkHolanda.repository.AddressRepository;
import com.example.milkHolanda.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("addressFacade")
public class DefaultAddressFacade implements AddressFacade {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private AddressPopulator addressPopulator;

    @Override
    public void addAddressClient(AddressClientDTO address, String idClient) {

        long existsClient = clientRepository.existsByIdClient(idClient);
        long existsAddressWithThisClient = addressRepository.existsAddressWithThisClient(idClient);

        if(existsClient == 1 && existsAddressWithThisClient == 0) {
            Client client = clientRepository.findClientById(idClient);
            AddressClient addressClient = addressPopulator.addAddressForClientModel(address);
            addressClient.setClient(client);
            addressRepository.save(addressClient);
        }
    }

    @Override
    public void updateAddressByClient(Long id, AddressClientDTO addressClient) {

        final boolean existsThisAddress = addressRepository.existsById(id);
        

        if(existsThisAddress) {
            AddressClient address = addressRepository.findById(id).get();
            AddressClient newAddress = addressPopulator.addAddressForClientModel(addressClient);
            newAddress.setId(id);
            newAddress.setClient(address.getClient());
            addressRepository.save(newAddress);
        }
    }

    @Override
    public void deleteAddressById(Long id) {
        final boolean existsThisAddress = addressRepository.existsById(id);

        if (existsThisAddress) {
            addressRepository.deleteById(id);
        }

    }
}
