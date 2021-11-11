package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.ProductDTO;
import com.example.milkHolanda.facade.ProductFacade;
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
    public ResponseEntity<List<ProductDTO>> findAllProducts() {

        List<ProductDTO> products = productFacade.findAll();

        return ResponseEntity.ok().body(products);
    }

    @PostMapping
    public ResponseEntity<URI> addProduct(@Valid @RequestBody ProductDTO productDTO) {

        productFacade.addProduct(productDTO);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .buildAndExpand().toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody ProductDTO productDTO){

        productFacade.updateProductById(id, productDTO);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        productFacade.deleteProductById(id);

        return ResponseEntity.noContent().build();
    }

}
