import { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
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
}

const Quantity = ({ item }: ItemProps) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  function formatQuantity(value: string) {
    value = value.replace(/\D/gim, "");
    Number(value) < 0 && setQuantity(1);
    Number(value) >= 0 && value.length <= 3 && setQuantity(Number(value));
  }
  function addProduct() {
    setQuantity(quantity + 1);
  }

  function removeProduct() {
    const newQauntity = quantity - 1;
    if (newQauntity > 0) setQuantity(newQauntity);
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
            onChange={(e) => formatQuantity(e.target.value)}
            value={quantity}
            type={"text"}
          />

          <PlusAndMinus onClick={addProduct}>
            <AiFillPlusCircle color="#0066ff" size={"1.8rem"} />
          </PlusAndMinus>
        </div>

        <ButtonSaveNewQuantity
          disabled={item.quantity === quantity}
          isAlterableQuantity={item.quantity !== quantity}
        >
          Salvar
        </ButtonSaveNewQuantity>
      </ItemController>
    </ItemContainer>
  );
};

export default Quantity;
