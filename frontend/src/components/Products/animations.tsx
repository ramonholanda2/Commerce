import { keyframes } from "styled-components";

export const ViewProduct = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px) translateY(-50px);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateX(0px) translateY(0px);
    filter: blur(0px);
  }
`;

export const AddProductToCart = keyframes`
  from {
    opacity: 0;
    transform: rotate(10deg);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: rotate();
    filter: blur(0px);
  }
`;


