import styled from "styled-components";
import { motion } from "framer-motion";

export const Bg = styled.div`
  padding: 125px 0;
  max-width: 100vw;
  background-color: #efc08e;
`;

export const H2 = styled(motion.h2)`
  color: #000000;
  font-size: 75px;
  line-height: 90px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;
  text-align: right;

  & span {
    display: block;
    font-size: 40px;
    line-height: 40px;
  }

  @media (max-width: 1449px) {
    font-size: 60px;
    line-height: 72px;
  }

  @media (max-width: 1199px) {
    font-size: 50px;
    line-height: 60px;
  }

  @media (max-width: 991px) {
    text-align: left;
    padding-bottom: 2rem;
    padding-left: 0.5rem;
    font-size: 60px;
    line-height: 72px;
  }

  @media (max-width: 567px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const Paragraph = styled(motion.p)`
  font-family: "DIN-Regular";
  font-size: 32px;
  line-height: 40px;
  padding-bottom: 1.5rem;
  padding-left: 2rem;

  &:nth-of-type(2) {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  @media (max-width: 1449px) {
    font-size: 30px;
    line-height: 37px;
  }
  @media (max-width: 1199px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 991px) {
    padding-left: 0;
  }

  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 27px;
    padding-left: 0;
  }
`;
