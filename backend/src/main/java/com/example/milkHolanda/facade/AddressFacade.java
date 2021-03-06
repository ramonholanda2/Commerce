package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.AddressClientDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AddressFacade {
    void addAddressClient(AddressClientDTO address, String idClient);

    void updateAddressByClient(String idClient, AddressClientDTO addressClient);

    void deleteAddressById(Long id);

    ResponseEntity<List<AddressClientDTO>> getAddressesByClient(String idClient);

    ResponseEntity<AddressClientDTO> getAddressByClient(String idClient, Long idAddress);
}
