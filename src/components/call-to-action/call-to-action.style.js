import styled from "styled-components";
import { motion } from "framer-motion";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2d16f;
  background-repeat: repeat;
  background-size: 215px 230px;
  max-width: 100vw;
  padding: 200px 0;

  @media (max-width: 1449px) {
    padding-top: 200px;
    padding-bottom: 170px;
    background-size: 179px 191px;
  }

  @media (max-width: 1199px) {
    padding-top: 15vw;
    padding-bottom: 8.5vw;
    background-size: 14.5vw 15vw;
  }
`;

export const NeonTextWrapper = styled(motion.div)`
  transform: translate(3vw, -1vh);
`;

export const NeonText = styled.div`
  font-family: "Acrotype";
  color: #fff;
  font-size: 100px;
  line-height: 100px;
  text-shadow: 0 0 10px #fff, 0 0 21px #fff;
  transform: rotate(-10deg);

  &:nth-of-type(2) {
    transform: rotate(-10deg) translateX(80px);
  }
  &:nth-of-type(3) {
    transform: rotate(-10deg) translateX(-40px);
  }
  @media (max-width: 1449px) {
    margin-top: -45px;
    font-size: 80px;
    line-height: 120px;
  }

  @media (max-width: 1199px) {
    margin-top: -2vw;
    font-size: 8vw;
    line-height: 11vw;
    text-shadow: 0 0 10px #fff, 0 0 21px #fff;
    transform: rotate(-10deg);

    &:nth-of-type(2) {
      transform: rotate(-10deg) translateX(8vw);
    }
    &:nth-of-type(3) {
      transform: rotate(-10deg) translateX(-4vw);
    }
  }

  @media (max-width: 767px) {
    line-height: 14vw;
  }
`;
