package com.example.milkHolanda.populator.impl;
import com.example.milkHolanda.dto.ClientDTO;
import com.example.milkHolanda.entities.Client;
import com.example.milkHolanda.populator.ClientPopulator;
import com.example.milkHolanda.service.ModelMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("clientPopulator")
public class DefaultClientPopulator implements ClientPopulator {

    @Autowired
    private ModelMapperService modelMapperService;

    @Override
    public Client addClient(ClientDTO clientDTO) {
        return modelMapperService.modelMapper().map(clientDTO, Client.class);
    }

}
