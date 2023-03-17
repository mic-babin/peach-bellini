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
    font-size: 28px;
    line-height: 35px;
  }

  @media (max-width: 1199px) {
    font-size: 28px;
    line-height: 32px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 27px;
    padding-left: 0;
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
    font-size: 60px;
    line-height: 72px;
  }
`;

export const H3 = styled.div`
  font-family: "DIN-Medium";
  font-size: 35px;
  padding-bottom: 5px;
  @media (max-width: 1449px) {
    font-size: 28px;
  }

  @media (max-width: 1199px) {
    font-size: 28px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;
