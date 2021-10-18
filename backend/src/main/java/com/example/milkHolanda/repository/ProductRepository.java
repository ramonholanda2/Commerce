package com.example.milkHolanda.repository;

import com.example.milkHolanda.entities.RequestProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<RequestProduct, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM " +
            "TB_PRODUCT AS RP " +
            "JOIN TB_CLIENT_PRODUCT AS RPC " +
            "ON RPC.CLIENT_ID = ? " +
            "WHERE RP.ID = RPC.REQUEST_PRODUCT_ID")
    List<RequestProduct> findProductsByClientId(String id);

    @Modifying
    @Query(nativeQuery = true, value =
            "INSERT INTO TB_CLIENT_PRODUCT" +
                    "(CLIENT_ID , REQUEST_PRODUCT_ID) " +
                    "VALUES (?, ?)")
    void addProductWithClient(String idClient, long idProduct);

    @Query(nativeQuery = true, value =
            "SELECT COUNT(*) FROM TB_CLIENT_PRODUCT AS CP " +
                    "WHERE CP.CLIENT_ID = ? AND CP.REQUEST_PRODUCT_ID = ?")
    long existsProductWithClient(String idClient, long idProduct);

}
