import { keyframes } from "styled-components";

export const AnimatePurchase = keyframes`
from {
  opacity: 0;
  transform: translateX(300px) translateY(20px) skew(10deg, -10deg) scale(0.5);
  filter: blur(10px);
}
to {
  opacity: 1;
  transform: translateX(0px) translateY(0px) skew(0deg, 0deg);
  filter: blur(0px);
}
`;