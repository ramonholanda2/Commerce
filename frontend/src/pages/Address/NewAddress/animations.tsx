import { keyframes } from "styled-components";

export const AnimateInputAddress = keyframes`
from {
  opacity: 0;
  transform: translateX(-200px) translateY(0) skew(10deg, 0deg);
  filter: blur(15px);
}
to {
  opacity: 1;
  transform: translateX(0px) translateY(0px) skew(0deg, 0deg);
  filter: blur(0px);
}
`;

export const AnimateBtnsAddress = keyframes`
from {
  opacity: 0;
  transform: translateX(0px) translateY(40px) skew(10deg, 0deg);
  filter: blur(20px);
}
to {
  opacity: 1;
  transform: translateX(0px) translateY(0px) skew(0deg, 0deg);
  filter: blur(0px);
}
`;
