package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.entities.AddressClient;

import java.util.List;

public interface AddressService {
    void addAddressForClient(AddressClientDTO address, String idClient);

    void updateAddressForClient(Long id, AddressClientDTO addressClient);

    void deleteAddressById(Long id);

    List<AddressClient> getAddressesByClient(String idClient);

    AddressClient getAddressByClient(String idClient, Long idAddress);
}
