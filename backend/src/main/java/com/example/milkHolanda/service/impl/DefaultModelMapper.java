package com.example.milkHolanda.service.impl;

import com.example.milkHolanda.service.ModelMapperService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service("modelMapperService")
public class DefaultModelMapper implements ModelMapperService {

    @Override
    public ModelMapper modelMapper() {

        return new ModelMapper();
    }

}
