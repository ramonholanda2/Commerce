package com.example.milkHolanda.facade.impl;

import com.example.milkHolanda.dto.pks.ClientProductDTO;
import com.example.milkHolanda.facade.ClientProductFacade;
import com.example.milkHolanda.service.ClientProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("clientProductFacade")
public class DefaultClientProductFacade implements ClientProductFacade {

    @Autowired
    private ClientProductService clientProductService;
    @Override
    public void addProductForClient(ClientProductDTO clientProductDTO) {

        clientProductService.addProductForClient(clientProductDTO);

    }

    @Override
    public void removeProductForClient(ClientProductDTO clientProductDTO) {
        clientProductService.removeProductForClient(clientProductDTO);
    }

}
