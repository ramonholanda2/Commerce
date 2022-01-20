package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.AddressClientDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AddressFacade {
    void addAddressClient(AddressClientDTO address, String idClient);

    void updateAddressByClient(Long id, AddressClientDTO addressClient);

    void deleteAddressById(Long id);

    ResponseEntity<List<AddressClientDTO>> getAddressByClient(String idClient);
}
