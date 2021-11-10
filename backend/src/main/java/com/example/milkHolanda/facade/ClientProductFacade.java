package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.pks.ClientProductDTO;

public interface ClientProductFacade {

    void addProductForClient(ClientProductDTO clientProductDTO);
    void removeProductForClient(ClientProductDTO clientProductDTO);


}
