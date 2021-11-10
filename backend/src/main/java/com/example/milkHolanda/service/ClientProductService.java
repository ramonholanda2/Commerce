package com.example.milkHolanda.service;

import com.example.milkHolanda.dto.pks.ClientProductDTO;

public interface ClientProductService {
    void addProductForClient(ClientProductDTO clientProductDTO);
    void removeProductForClient(ClientProductDTO clientProductDTO);

}
