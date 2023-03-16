import styled from "styled-components";
import { Link } from "gatsby";

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

export const H2 = styled.h2`
  margin-top: 250px;
  color: #000000;
  font-size: 150px;
  line-height: 130px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;
  .img {
    width: 160px;
  }

  @media (max-width: 1399px) {
    font-size: 120px;
    line-height: 104px;

    .img {
      width: 160px;
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

  @media (max-width: 567px) {
    margin-top: 200px;
    font-size: 18vw;
    line-height: 22vw;
    .img {
      width: 28vw;
    }
  }
`;

export const H1 = styled.h1`
  margin-top: 30px;
  color: #d04638;
  font-size: 60px;
  line-height: 60px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;

  @media (max-width: 1399px) {
    font-size: 50px;
    line-height: 50px;
  }

  @media (max-width: 1199px) {
    font-size: 40px;
    line-height: 40px;
  }

  @media (max-width: 567px) {
    font-size: 7vw;
    line-height: 8vw;
  }
`;

export const Button = styled(Link)`
  cursor: pointer;
  margin-top: 50px;
  color: #d04638;
  background-color: transparent;
  max-width: 325px;
  font-size: 30px;
  line-height: 40px;
  font-family: "DIN-Medium";
  text-transform: uppercase;
  border: 2px solid #d04638;
  border-radius: 34px;
  padding-top: 0.75rem;
  padding-bottom: 0.45rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #d04638;
  }

  @media (max-width: 1199px) {
    font-size: 28px;
    line-height: 35px;
  }

  @media (max-width: 991px) {
    margin-left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 567px) {
    font-size: 5vw;
    line-height: 6vw;
  }
`;

export const Can = styled.div`
  margin-top: 150px;
  height: 700px;
  margin-bottom: 75px;

  img {
    height: 100%;
  }

  @media (max-width: 1199px) {
    margin-top: 200px;
    height: 600px;
    margin-bottom: 50px;
    margin-left: -25px;
  }

  @media (max-width: 991px) {
    margin-top: 100px;
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
  @media (max-width: 567px) {
    margin-top: 75px;
    margin-left: 10vw;
    height: 90vw;
    margin-bottom: 25px;
  }
`;

export const NeonWrapper = styled.div`
  position: absolute;
  top: 550px;
  left: 50px;
  transform: rotate(-10deg);

  @media (max-width: 991px) {
    transform: rotate(-10deg) translate(150px, -400px);
  }
  @media (max-width: 767px) {
    transform: rotate(-10deg) translate(20vw, -400px);
  }
  @media (max-width: 567px) {
    transform: rotate(-10deg) translate(20vw, -400px);
  }
`;

export const NeonWord = styled.div`
  font-family: "Acrotype";
  color: rgba(245, 237, 150, 1);
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

  @media (max-width: 1199px) {
    font-size: 60px;
    line-height: 45px;
    margin-left: -25px;
  }
  @media (max-width: 567px) {
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
