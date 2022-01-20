package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.entities.AddressClient;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.exceptions.MethodArgumentNotValidException;
import com.example.milkHolanda.exceptions.ObjectNotFoundException;
import com.example.milkHolanda.facade.AddressFacade;
import com.example.milkHolanda.populator.AddressPopulator;
import com.example.milkHolanda.repository.AddressRepository;
import com.example.milkHolanda.repository.ClientRepository;
import com.example.milkHolanda.service.AddressService;
import org.hibernate.ObjectDeletedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("addressFacade")
public class DefaultAddressFacade implements AddressFacade {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private AddressPopulator addressPopulator;

    @Autowired
    private AddressService addressService;

    @Override
    public void addAddressClient(AddressClientDTO address, String idClient) {

        addressService.addAddressForClient(address, idClient);

    }

    @Override
    public void updateAddressByClient(Long id, AddressClientDTO addressClient) {
        addressService.updateAddressForClient(id, addressClient);
    }

    @Override
    public void deleteAddressById(Long id) {
        addressService.deleteAddressById(id);
    }

    @Override
    public ResponseEntity<List<AddressClientDTO>> getAddressesByClient(String idClient) {
         List<AddressClient> address = addressService.getAddressesByClient(idClient);

         List<AddressClientDTO> clientDTOS = new ArrayList<>();

         for (AddressClient addressClient : address) {
             clientDTOS.add(new AddressClientDTO(addressClient));
         }

         return ResponseEntity.ok().body(clientDTOS);

    }

    @Override
    public ResponseEntity<AddressClientDTO> getAddressByClient(String idClient, Long idAddress) {

        AddressClient addressClient = addressService.getAddressByClient(idClient, idAddress);

        if(addressClient == null) {
            throw new ObjectNotFoundException("Endereco não encontrado");
        }

        return ResponseEntity.ok().body(new AddressClientDTO(addressClient));
    }
}
