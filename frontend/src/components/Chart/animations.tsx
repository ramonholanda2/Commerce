import { keyframes } from "styled-components";

export const AnimateChart = keyframes`
from {
  opacity: 0;
  transform: translateX(-250px) translateY(-20px) skew(5deg, -5deg) scale(0.7);
  filter: blur(5px);
}
to {
  opacity: 1;
  transform: translateX(0px) translateY(0px) skew(0deg, 0deg) scale(1);
  filter: blur(0px);
}
`;
