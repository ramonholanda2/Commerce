package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.dto.ProductItemDTO;
import com.example.milkHolanda.dto.RequestProductDTO;
import com.example.milkHolanda.facade.ProductFacade;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/products")
@Transactional
public class ProductController {

    @Autowired
    private ProductFacade productFacade;

    @GetMapping
    @ApiOperation(value="Busca todos os produtos")
    public ResponseEntity<List<ProductDTO>> findAllProducts() {

        List<ProductDTO> products = productFacade.findAll();

        return ResponseEntity.ok().body(products);
    }

    @PostMapping
    @ApiOperation(value="Adiciona um novo produto")
    public ResponseEntity<URI> addProduct(@Valid @RequestBody ProductDTO productDTO) {

        productFacade.addProduct(productDTO);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .buildAndExpand().toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping(path = "/update/{id}")
    @ApiOperation(value="Atualiza um produto por id")
    public ResponseEntity<String> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody ProductDTO productDTO){

        productFacade.updateProductById(id, productDTO);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(path = "/delete/{id}")
    @ApiOperation(value="Deleta um produto por id")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        productFacade.deleteProductById(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping(path = "/get-products-by-client/{idClient}")
    @ApiOperation(value="Busca todos os produtos de um cliente")
    public ResponseEntity getProductsByClient(@PathVariable String idClient) {
        List<RequestProductDTO> products = productFacade.findProductsByClient(idClient);
        return ResponseEntity.ok().body(products);
    }

}
