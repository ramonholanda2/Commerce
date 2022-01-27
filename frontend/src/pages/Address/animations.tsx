import { keyframes } from "styled-components";

export const AnimateAddress = keyframes`
from {
  opacity: 0;
  transform: translateX(0px) translateY(200px) skew(10deg, -10deg);
  filter: blur(10px);
}
to {
  opacity: 1;
  transform: translateX(0px) translateY(0px) skew(0deg, 0deg);
  filter: blur(0px);
}
`;