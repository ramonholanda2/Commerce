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
import java.util.ArrayList;
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

    @PostMapping(path = "/save")
    public ResponseEntity<String> addProduct(@Valid @RequestBody RequestProductDTO productDTO, @NotNull BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            List<String> errors = new ArrayList<>();

            String quantErrors = bindingResult.getErrorCount() + " Erros encontrados!";
            errors.add(quantErrors);
            bindingResult.getAllErrors().stream().forEach(error -> {
                String message = error.getDefaultMessage();
                errors.add(message);
            });

            return ResponseEntity.badRequest().body(errors.toString());
        }

        productService.addProduct(productDTO);

        return ResponseEntity.ok().body("Produto Adicionado com sucesso!");
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody RequestProductDTO productDTO,
            @NotNull BindingResult bindingResult){

        List<String> errors = new ArrayList<>();

        if(bindingResult.hasErrors()) {

            String quantErrors = bindingResult.getErrorCount() + " Erros encontrados!";
            errors.add(quantErrors);
            bindingResult.getAllErrors().stream().forEach(error -> {
                String message = error.getDefaultMessage();
                errors.add(message);
            });

            return ResponseEntity.badRequest().body(errors.toString());

        }

        productService.updateproduct(id, productDTO);

        return ResponseEntity.ok().body("Produto atualizado com sucesso!");
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
