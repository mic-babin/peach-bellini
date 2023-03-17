import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, #f0cb6e, #f2d16f, #fff3b2);
  max-width: 100vw;
`;

export const PinkWave = styled.img`
  transform: scale(1, -1);
`;

export const Container = styled.div`
  margin-top: 150px;
  margin-bottom: 50px;

  @media (max-width: 991px) {
    margin-top: 50px;
  }
`;

export const Image = styled(motion.div)`
  height: 750px;

  img {
    height: 100%;
  }

  @media (max-width: 1199px) {
    height: 625px;
  }

  @media (max-width: 991px) {
    width: 55vw;
    height: auto;
  }
`;
export const H2 = styled(motion.h2)`
  padding-top: 25px;
  color: #000000;
  font-size: 75px;
  line-height: 90px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;

  @media (max-width: 1399px) {
    font-size: 60px;
    line-height: 72px;
  }

  @media (max-width: 1199px) {
    font-size: 50px;
    line-height: 60px;
  }

  @media (max-width: 991px) {
    font-size: 60px;
    line-height: 72px;
  }
  @media (max-width: 567px) {
    font-size: 45px;
    line-height: 57px;
  }
`;
export const Description = styled(motion.p)`
  font-family: "DIN-Regular";
  font-size: 32px;
  line-height: 40px;
  padding: 1.5rem 0;

  @media (max-width: 1399px) {
    font-size: 28px;
    line-height: 35px;
  }

  @media (max-width: 1199px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 27px;
  }
`;
export const List = styled(motion.ul)`
  padding-left: 0;
  list-style: none;
`;
export const ListItem = styled.li`
  width: 100%;
  border-top: 1px solid #707070;
  padding: 0.5rem 1rem;
  font-family: "DIN-Regular";
  font-size: 32px;

  &:last-of-type {
    border-bottom: 1px solid #707070;
  }

  span {
    display: inline-block;
    text-align: center;
    margin-right: 1.5rem;
    width: 40px;
  }

  span.img {
    width: 35px;
  }

  @media (max-width: 1399px) {
    font-size: 28px;
    line-height: 35px;
  }

  @media (max-width: 1199px) {
    font-size: 24px;
    line-height: 32px;
    span.img {
      width: 28px;
    }
  }

  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 27px;

    span.img {
      margin-left: 2px;
      width: 25px;
    }
  }

  @media (max-width: 567px) {
    font-size: 22px;
    line-height: 23px;

    span.img {
      margin-left: 5px;
      width: 22px;
    }
  }

  @media (max-width: 389px) {
    font-size: 20px;
    line-height: 20px;

    span.img {
      width: 20px;
    }
  }
`;

export const CurbTextWrapper = styled.div`
  height: 0;
  font-family: "Acrotype";
  font-size: 50px;
  line-height: 50px;
  transform: translateY(calc(-12vw - 250px));

  #text-path {
    fill: rgb(249, 238, 127);
    text-shadow: 0 0 6px rgba(245, 237, 150, 0.5),
      0 0 10px rgba(245, 237, 150, 0.5), 0 0 21px rgba(245, 237, 150, 0.5);
  }

  @media (max-width: 1199px) {
    font-size: 60px;
    line-height: 60px;
  }
  @media (max-width: 991px) {
    font-size: 70px;
    line-height: 70px;
  }

  @media (max-width: 767px) {
    font-size: 85px;
    line-height: 85px;
  }
  @media (max-width: 567px) {
    font-size: 100px;
    line-height: 100px;
  }
`;
