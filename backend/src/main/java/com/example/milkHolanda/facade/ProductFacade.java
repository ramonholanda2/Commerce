package com.example.milkHolanda.facade;

import com.example.milkHolanda.dto.RequestProductDTO;
import com.example.milkHolanda.dto.pks.ClientProductDTO;

import java.util.List;

public interface ProductFacade {
    List<RequestProductDTO> findAll();

    void addProduct(RequestProductDTO productDTO);

    void addProductForClient(ClientProductDTO clientProductDTO);

    void updateProductById(Long id, RequestProductDTO productDTO);
}
