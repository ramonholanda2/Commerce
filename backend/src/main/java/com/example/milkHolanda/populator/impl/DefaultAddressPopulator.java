package com.example.milkHolanda.populator.impl;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.entities.AddressClient;
import com.example.milkHolanda.populator.AddressPopulator;
import com.example.milkHolanda.service.ModelMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("addressPopulator")
public class DefaultAddressPopulator implements AddressPopulator {

    @Autowired
    private ModelMapperService modelMapperService;

    @Override
    public AddressClient addAddressForClientModel(AddressClientDTO address) {

        return modelMapperService.modelMapper().map(address, AddressClient.class);

    }
}
