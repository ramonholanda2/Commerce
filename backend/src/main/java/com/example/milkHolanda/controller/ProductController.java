package com.example.milkHolanda.controller;

import com.example.milkHolanda.dto.RequestProductDTO;
import com.example.milkHolanda.dto.pks.ClientProductDTO;
import com.example.milkHolanda.service.ProductService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/products")
@Transactional
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<RequestProductDTO>> findAllProducts() {

        List<RequestProductDTO> products = productService.findAll();

        return ResponseEntity.ok().body(products);
    }

    @PostMapping
    public ResponseEntity<String> addProduct(@RequestBody RequestProductDTO productDTO) {

        productService.addProduct(productDTO);

        return ResponseEntity.ok().body("Produto Adicionado com sucesso!");
    }

    @RequestMapping(method = RequestMethod.POST, path = "/add-product")
    public ResponseEntity<String> addProductForClient(@Valid @RequestBody ClientProductDTO clientProductDTO, @NotNull BindingResult bindingResult) {

        if(bindingResult.hasErrors()){
            return ResponseEntity.badRequest().body("Erros foram encontrados!");
        }

        if (clientProductDTO != null) {
            productService.addProductForClient(clientProductDTO);
        }

        return ResponseEntity.ok().body("Produto adicionado ao cliente");
    }

}
