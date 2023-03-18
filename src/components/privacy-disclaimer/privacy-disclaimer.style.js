import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 320px;
  padding-bottom: 100px;
  font-family: "DIN-Regular";
  font-size: 35px;
  line-height: 42px;
  ul {
    list-style: none;
    padding-left: 0;
  }

  p {
    padding-bottom: 1rem;
  }

  @media (max-width: 1449px) {
    padding-top: 270px;
    font-size: 25px;
    line-height: 30px;
  }

  @media (max-width: 767px) {
    padding-top: 200px;
    font-size: 22px;
    line-height: 24px;
    padding-left: 0;
  }

  @media (max-width: 576px) {
    padding-top: 170px;
    font-size: 20px;
    line-height: 22px;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  color: #000000;
  font-size: 75px;
  line-height: 90px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;
  padding-bottom: 60px;

  @media (max-width: 1449px) {
    font-size: 50px;
    line-height: 60px;
  }

  @media (max-width: 1199px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const H3 = styled.div`
  font-family: "DIN-Medium";
  font-size: 32px;
  padding-bottom: 5px;
  @media (max-width: 1449px) {
    font-size: 28px;
  }

  @media (max-width: 1199px) {
    font-size: 25px;
  }

  @media (max-width: 767px) {
    font-size: 22px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;
