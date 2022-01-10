package com.example.milkHolanda.repository;

import com.example.milkHolanda.entities.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM TB_PURCHASE AS P WHERE P.ID_CLIENT = ?")
    List<Purchase> findPurchasesByClient(String idClient);
}
