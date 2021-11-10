package com.example.milkHolanda.repository;


import com.example.milkHolanda.entities.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<ProductItem, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM TB_PRODUCT_ITEM pi where pi.product_id = ?")
    ProductItem findItemForProduct(Long id);

    @Query(nativeQuery = true, value =
            "SELECT COUNT(*) FROM TB_PRODUCT_ITEM AS PI" +
                    " JOIN TB_PRODUCT AS RP" +
                        " ON PI.PRODUCT_ID  = RP.ID " +
                            "WHERE PI.CLIENT_ID  = ? " +
                                "AND PI.PRODUCT_ID  = ?"
    )
    long countItemForClientAndProduct(String idClient, Long idProduct);


    @Query(nativeQuery = true, value =
            "SELECT * FROM TB_PRODUCT_ITEM pi " +
                    "where pi.product_id = ? " +
                        "AND pi.CLIENT_ID = ?"
    )
    ProductItem findItemForProductAndClient(Long id, String id1);

    @Query(nativeQuery = true, value = "SELECT * FROM TB_PRODUCT_ITEM AS PI WHERE PI.PRODUCT_ID = ?")
    List<ProductItem> findAllItemsWithThisProduct(Long id);

    @Query(nativeQuery = true, value = "SELECT * FROM TB_PRODUCT_ITEM AS PI WHERE PI.PRODUCT_ID = ? AND PI.CLIENT_ID = ?")
    ProductItem findItemWithThisProductAndClient(long idProduct, String idClient);
}