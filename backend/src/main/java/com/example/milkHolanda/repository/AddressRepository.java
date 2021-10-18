package com.example.milkHolanda.repository;

import com.example.milkHolanda.entities.AddressClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<AddressClient, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM TB_ADDRESS AS ad WHERE ad.client_id = ?")
    AddressClient findAddressForClient(String id);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM TB_ADDRESS AS AD WHERE AD.CLIENT_ID = ?")
    long existsAddressWithThisClient(String id);

}
