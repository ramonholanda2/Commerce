package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.entities.AddressClient;
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
    public void addAddressClient(AddressClientDTO address) {

        String idClient = address.getClient().getId();

        if(idClient != null) {

            long existsClient = clientRepository.existsByIdClient(idClient);
            long existsAddressWithThisClient = addressRepository.existsAddressWithThisClient(idClient);

            if (existsClient == 1 && existsAddressWithThisClient == 0) {

                AddressClient addressClient = addressPopulator.addAddressForClientModel(address);

                addressRepository.save(addressClient);
            }
        }
    }

    @Override
    public void updateAddressByClient(Long id, AddressClientDTO addressClient) {

        final boolean existsThisAddressWithClient = addressRepository.existsById(id);
        long existsThisClient = clientRepository.existsByIdClient(addressClient.getClient().getId());

        if(existsThisAddressWithClient
                &&  existsThisClient == 1) {

            addressClient.setId(id);
            AddressClient newAddress = addressPopulator.addAddressForClientModel(addressClient);

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
