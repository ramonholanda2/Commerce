package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.entities.AddressClient;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.facade.AddressFacade;
import com.example.milkHolanda.populator.AddressPopulator;
import com.example.milkHolanda.repository.AddressRepository;
import com.example.milkHolanda.repository.ClientRepository;
import org.jetbrains.annotations.NotNull;
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
    public void addAddressClient(@NotNull AddressClientDTO address) {

        String idClient = address.getClient().getId();

        if(idClient != null) {

            long existsClient = clientRepository.existsByIdClient(idClient);

            if (existsClient == 1) {

                AddressClient addressClient = addressPopulator.addAddressForClientModel(address);

                addressRepository.save(addressClient);
            }


        }
    }

    @Override
    public void updateAddressByClient(Long id, AddressClientDTO addressClient) {
        boolean existsThisAddressWithClient = addressRepository.existsById(id);

        if(existsThisAddressWithClient
                && (id == addressClient.getId())
                && addressClient.getClient().getId() != null) {

            AddressClient newAddress = addressPopulator.addAddressForClientModel(addressClient);

            addressRepository.save(newAddress);
        }
    }
}
