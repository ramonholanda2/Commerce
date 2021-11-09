package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.AddressClientDTO;

public interface AddressFacade {
    void addAddressClient(AddressClientDTO address, String idClient);

    void updateAddressByClient(Long id, AddressClientDTO addressClient);

    void deleteAddressById(Long id);
}
