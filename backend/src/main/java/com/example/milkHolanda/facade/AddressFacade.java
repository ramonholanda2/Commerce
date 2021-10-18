package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.AddressClientDTO;

public interface AddressFacade {
    void addAddressClient(AddressClientDTO address);

    void updateAddressByClient(Long id, AddressClientDTO addressClient);
}
