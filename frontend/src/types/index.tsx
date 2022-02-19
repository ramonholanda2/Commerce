import { SetStateAction } from "react";

export interface SendProduct {
  name: SetStateAction<string | undefined>;
  price: SetStateAction<string | undefined>;
  urlImage: any;
}

export interface Address {
    clientId: string; 
    id: number;
    cep: string;
    street: string;
    city: string;
    district: string;
    number: number;
    complement: string;
  }