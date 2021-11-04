package com.example.milkHolanda.repository;

import com.example.milkHolanda.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {


    @Query(nativeQuery = true, value = "SELECT * FROM TB_CLIENT AS cl WHERE cl.id = ?")
    List<Client> findClientById(String id);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM TB_CLIENT AS CL WHERE cl.id = ?")
    long existsByIdClient(String idClient);
}
