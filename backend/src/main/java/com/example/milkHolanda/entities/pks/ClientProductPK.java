//package com.example.milkHolanda.entities.pks;
//
//import com.example.milkHolanda.entities.Client;
//import com.example.milkHolanda.entities.RequestProduct;
//
//import javax.persistence.Embeddable;
//import javax.persistence.ManyToMany;
//import javax.persistence.ManyToOne;
//import java.io.Serializable;
//
//@Embeddable
//public class ClientProductPK implements Serializable {
//
//    @ManyToMany
//    private Client client;
//
//    @ManyToMany
//    private RequestProduct product;
//
//    public ClientProductPK(Client client, RequestProduct product) {
//        this.client = client;
//        this.product = product;
//    }
//
//    public Client getClient() {
//        return client;
//    }
//
//    public void setClient(Client client) {
//        this.client = client;
//    }
//
//    public RequestProduct getProduct() {
//        return product;
//    }
//
//    public void setProduct(RequestProduct product) {
//        this.product = product;
//    }
//}
