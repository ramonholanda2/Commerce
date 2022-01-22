package com.example.milkHolanda.repository;

import com.example.milkHolanda.entities.AddressClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<AddressClient, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM TB_ADDRESS AS ad WHERE ad.client_id = ?")
    List<AddressClient> findAddressForClient(String idClient);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM TB_ADDRESS AS AD WHERE AD.CLIENT_ID = ?")
    long existsAddressWithThisClient(String id);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM TB_ADDRESS AS AD WHERE AD.id = ? AND AD.CLIENT_ID = ?")
    long existsThisAddressByClient(Long idAddress, String idClient);

    @Query(nativeQuery = true, value = "SELECT * FROM TB_ADDRESS AS AD WHERE AD.CLIENT_ID = ? AND AD.id = ?")
    AddressClient findAddressByClient(String idClient, Long idAddress);
}
