package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.facade.AddressFacade;
import com.example.milkHolanda.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("addressService")
public class DefaultAddressService implements AddressService {

    @Autowired
    private AddressFacade addressFacade;

    @Override
    public void addAddressForClient(AddressClientDTO address) {

        addressFacade.addAddressClient(address);

    }

    @Override
    public void updateAddressForClient(Long id, AddressClientDTO addressClient) {
        addressFacade.updateAddressByClient(id, addressClient);
    }
}
