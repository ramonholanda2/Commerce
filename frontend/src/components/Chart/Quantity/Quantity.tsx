import { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useMutation } from "react-query";
import { useAuthContext } from "../../../contexts/AuthContext";
import { queryClient } from "../../../index";
import loading from "../../../assets/spinning-loading.gif";
import * as api from "../../../commerceAPI";
import {
  ItemContainer,
  PlusAndMinus,
  QuantityInput,
  ButtonSaveNewQuantity,
  ItemController,
} from "./styles";

interface Item {
  id: Long;
  subtotal: number;
  quantity: number;
}

interface ItemProps {
  item: Item;
  idProduct: Long;
}

export interface UpdateItem {
  idClient: string;
  idItem: number;
  idProduct: number;
  quantity: number;
}

const Quantity = ({ item, idProduct }: ItemProps) => {
  const { user } = useAuthContext();
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const {
    isLoading,
    mutate: mutateUpdateItem,
  } = useMutation(api.updateItemByProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["chartClient", user?.id!]);
    },
  });

  function formatQuantity(value: string) {
    value = value.replace(/\D/gim, "");
    Number(value) < 1 && setQuantity(1);
    Number(value) >= 1 && value.length <= 3 && setQuantity(Number(value));
  }
  function addProduct() {
    String(quantity).length <= 3 && quantity < 999 && setQuantity(quantity + 1);
  }

  function removeProduct() {
    const newQauntity = quantity - 1;
    if (newQauntity > 0) setQuantity(newQauntity);
  }

  function keyPressInputQuantity(event: any) {
    if (event.key === "Enter" && item.quantity !== quantity) {
      updateItemByProduct(user?.id!, Number(item.id), quantity, Number(idProduct));
    }

    if (event.key === "ArrowDown") {
      removeProduct();
    } else if (event.key === "ArrowUp") {
      addProduct();
      event.preventDefault();
    }
  }

  async function updateItemByProduct(
    idClient: string,
    idItem: number,
    quantity: number,
    idProduct: number
  ) {
    const updateItemData: UpdateItem = {
      idClient,
      idItem,
      idProduct,
      quantity,
    };
    mutateUpdateItem(updateItemData);
  }

  return (
    <ItemContainer>
      <ItemController>
        <div style={{ display: "flex" }}>
          <PlusAndMinus onClick={removeProduct}>
            <AiFillMinusCircle color="#0066ff" size={"1.8rem"} />
          </PlusAndMinus>

          <QuantityInput
            pattern="(?<![0-9])0+"
            onKeyDown={(event) => keyPressInputQuantity(event)}
            onChange={(e) => formatQuantity(e.target.value)}
            value={quantity}
            type={"text"}
          />

          <PlusAndMinus onClick={addProduct}>
            <AiFillPlusCircle color="#0066ff" size={"1.8rem"} />
          </PlusAndMinus>
        </div>

        <ButtonSaveNewQuantity
          disabled={(item.quantity || isLoading) === quantity}
          isAlterableQuantity={item.quantity !== quantity}
          onClick={() =>
            updateItemByProduct(
              user?.id!,
              Number(item.id),
              quantity,
              Number(idProduct)
            )
          }
        >
          {isLoading ? (
            <img
              style={{ borderRadius: "100%", width: "30px", height: "25px" }}
              src={loading}
              alt="atualizando"
            />
          ) : (
            "Salvar"
          )}
        </ButtonSaveNewQuantity>
      </ItemController>
    </ItemContainer>
  );
};

export default Quantity;
