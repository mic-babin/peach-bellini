import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";

export const Bg = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(to right, transparent 76.5%, #efc08e 76.5%),
    linear-gradient(to bottom, #e8a986, #edb68a, #f1c48f, #f4d196, #f6df9f);
  @media (max-width: 991px) {
    background: linear-gradient(to right, transparent 80.5%, #efc08e 80.5%),
      linear-gradient(to bottom, #e8a986, #edb68a, #f1c48f, #f4d196, #f6df9f);
  }
`;

export const H2 = styled(motion.h2)`
  margin-top: 250px;
  color: #000000;
  font-size: 150px;
  line-height: 130px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;
  .img {
    width: 160px;
  }

  @media (max-width: 1449px) {
    font-size: 120px;
    line-height: 104px;
    margin-top: 150px;

    .img {
      width: 120px;
    }
  }

  @media (max-width: 1199px) {
    font-size: 90px;
    line-height: 78px;

    .img {
      width: 130px;
    }
  }

  @media (max-width: 991px) {
    font-size: 102px;
    line-height: 94px;
    .img {
      width: 160px;
    }
  }

  @media (max-width: 576px) {
    margin-top: 200px;
    font-size: 18vw;
    line-height: 22vw;
    .img {
      width: 28vw;
    }
  }
`;

export const H1 = styled(motion.h1)`
  margin-top: 30px;
  color: #d04638;
  font-size: 60px;
  line-height: 60px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;

  @media (max-width: 1449px) {
    font-size: 50px;
    line-height: 50px;
  }

  @media (max-width: 1199px) {
    font-size: 40px;
    line-height: 40px;
  }

  @media (max-width: 576px) {
    font-size: 7vw;
    line-height: 8vw;
  }
`;

export const ButtonWrapper = styled(motion.div)`
  margin-top: 50px;
`;

export const Button = styled(Link)`
  white-space: nowrap;
  cursor: pointer;
  color: #d04638;
  background-color: transparent;
  font-size: 25px;
  line-height: 25px;
  font-family: "DIN-Medium";
  text-transform: uppercase;
  border: 2px solid #d04638;
  border-radius: 34px;
  padding-top: 0.75rem;
  padding-bottom: 0.45rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background-color: #d04638;
  }

  @media (max-width: 1449px) {
    font-size: 20px;
    line-height: 20px;
  }

  @media (max-width: 1199px) {
    font-size: 23px;
    line-height: 23px;
  }

  @media (max-width: 576px) {
    font-size: 4.5vw;
    line-height: 4.5vw;
  }
`;

export const Can = styled.div`
  margin-top: 150px;
  height: 700px;
  margin-bottom: 75px;

  img {
    height: 100%;
  }

  @media (max-width: 1449px) {
    margin-top: 100px;
    height: auto;
    width: 500px;
    margin-bottom: 0px;
  }

  /* @media (max-width: 1199px) {
    margin-top: 200px;
    height: 600px;
    margin-bottom: 50px;
    margin-left: -25px;
  } */

  @media (max-width: 991px) {
    margin-top: 100px;
    width: auto;
    height: 600px;
    margin-bottom: 100px;
    margin-left: 10%;
  }
  @media (max-width: 767px) {
    margin-top: 100px;
    margin-left: 10vw;
    height: 500px;
    margin-bottom: 50px;
  }
  @media (max-width: 576px) {
    margin-top: 75px;
    margin-left: 10vw;
    height: 90vw;
    margin-bottom: 25px;
  }
`;

export const NeonWrapper = styled.div`
  height: 0;
  position: absolute;
  top: 550px;
  left: 50px;
  transform: rotate(-10deg);

  @media (max-width: 1449px) {
    transform: rotate(-10deg) translate(45px, -200px);
  }

  @media (max-width: 991px) {
    transform: rotate(-10deg) translate(150px, -400px);
  }
  @media (max-width: 767px) {
    transform: rotate(-10deg) translate(20vw, -400px);
  }
  @media (max-width: 576px) {
    transform: rotate(-10deg) translate(20vw, -400px);
  }
`;

export const NeonWord = styled(motion.div)`
  font-family: "Acrotype";
  color: rgba(249, 238, 127, 1);
  font-size: 75px;
  line-height: 55px;
  text-shadow: 0 0 6px rgba(245, 237, 150, 0.5),
    0 0 10px rgba(245, 237, 150, 0.5), 0 0 21px rgba(245, 237, 150, 0.5);

  &:first-of-type {
    transform: translateX(-40px);
  }
  &:nth-of-type(3) {
    transform: translateX(-80px);
  }
  &:nth-of-type(4) {
    transform: translateX(-40px);
  }

  @media (max-width: 1449px) {
    font-size: 67px;
    line-height: 50px;
    margin-left: -25px;
  }

  @media (max-width: 1199px) {
    font-size: 60px;
    line-height: 45px;
    margin-left: -25px;
  }
  @media (max-width: 576px) {
    margin-left: 0px;
    font-size: 10vw;
    line-height: 8vw;

    &:first-of-type {
      transform: translateX(-5vw);
    }
    &:nth-of-type(3) {
      transform: translateX(-10vw);
    }
    &:nth-of-type(4) {
      transform: translateX(-5vw);
    }
  }
`;
