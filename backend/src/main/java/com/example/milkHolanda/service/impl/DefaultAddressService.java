package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.entities.AddressClient;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.exceptions.DataIntegrityException;
import com.example.milkHolanda.exceptions.ObjectNotFoundException;
import com.example.milkHolanda.facade.AddressFacade;
import com.example.milkHolanda.populator.AddressPopulator;
import com.example.milkHolanda.repository.AddressRepository;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("addressService")
public class DefaultAddressService implements AddressService {

    @Autowired
    private AddressFacade addressFacade;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private AddressPopulator addressPopulator;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public void addAddressForClient(AddressClientDTO address, String idClient) {

        long existsClient = clientRepository.existsByIdClient(idClient);
        long existsAddressWithThisClient = addressRepository.existsAddressWithThisClient(idClient);

        if(existsClient != 1) {
            throw new ObjectNotFoundException("Cliente não encontrado!");
        } else if(existsAddressWithThisClient >= 3) {
            throw new DataIntegrityException("Só é possível adicionar 3 endereços!");
        }

        Client client = clientRepository.findClientById(idClient);
        AddressClient addressClient = addressPopulator.addAddressForClientModel(address);

        addressClient.setClient(client);
        addressRepository.save(addressClient);

    }

    @Override
    public void updateAddressForClient(String idClient, AddressClientDTO addressClient) {

        final long existsThisAddress = addressRepository.existsThisAddressByClient(addressClient.getId(), idClient);

        if(!addressRepository.existsById(addressClient.getId())) {
            throw new ObjectNotFoundException("endereço não existe");
        }

        if(existsThisAddress == 0) {
            throw new ObjectNotFoundException("este endereço não pertence ao cliente");
        } else {
            AddressClient address = addressRepository.findById(addressClient.getId()).get();
            AddressClient newAddress = addressPopulator.addAddressForClientModel(addressClient);
            newAddress.setClient(address.getClient());
            addressRepository.save(newAddress);
        }
    }

    @Override
    public void deleteAddressById(Long id) {
        final boolean existsThisAddress = addressRepository.existsById(id);

        if (existsThisAddress) {
            addressRepository.deleteById(id);
        } else {
            throw new ObjectNotFoundException("Endereço não encontrado!");
        }
    }

    @Override
    public List<AddressClient> getAddressesByClient(String idClient) {
        return addressRepository.findAddressForClient(idClient);
    }

    @Override
    public AddressClient getAddressByClient(String idClient, Long idAddress) {
        return addressRepository.findAddressByClient(idClient, idAddress);
    }
}
