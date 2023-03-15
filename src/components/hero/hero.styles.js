import styled from "styled-components";
import { Link } from "gatsby";

export const BG = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(to right, transparent 76.5%, #efc08e 76.5%),
    linear-gradient(to bottom, #e8a986, #edb68a, #f1c48f, #f4d196, #f6df9f);
`;

export const H2 = styled.h2`
  margin-top: 250px;
  color: #000000;
  font-size: 150px;
  line-height: 130px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;

  font-size: 120px;
  line-height: 104px;
`;

export const H1 = styled.h2`
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
`;

export const Can = styled.img`
  margin-top: 150px;
  height: 700px;
  margin-bottom: 75px;
`;

export const NeonWrapper = styled.div`
  position: absolute;
  top: 550px;
  left: 50px;
  transform: rotate(-10deg);
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
`;
