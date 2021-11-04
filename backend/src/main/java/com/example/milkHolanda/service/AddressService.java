package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.AddressClientDTO;

public interface AddressService {
    void addAddressForClient(AddressClientDTO address);

    void updateAddressForClient(Long id, AddressClientDTO addressClient);

    void deleteAddressById(Long id);
}
