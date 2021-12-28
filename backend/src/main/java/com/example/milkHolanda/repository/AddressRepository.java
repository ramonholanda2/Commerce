package com.example.milkHolanda.repository;

import com.example.milkHolanda.entities.AddressClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<AddressClient, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM TB_ADDRESS AS ad WHERE ad.client_id = ?")
    List<AddressClient> findAddressForClient(String id);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM TB_ADDRESS AS AD WHERE AD.CLIENT_ID = ?")
    long existsAddressWithThisClient(String id);

}
