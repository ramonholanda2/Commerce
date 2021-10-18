package com.example.milkHolanda.populator;

import com.example.milkHolanda.dto.AddressClientDTO;
import com.example.milkHolanda.entities.AddressClient;

public interface AddressPopulator {

    AddressClient addAddressForClientModel(AddressClientDTO address);

}
