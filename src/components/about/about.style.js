import styled from "styled-components";

export const BG = styled.div`
  padding: 125px 0;
  max-width: 100vw;
  background-color: #efc08e;
`;

export const H2 = styled.h2`
  color: #000000;
  font-size: 75px;
  line-height: 90px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;
  text-align: right;
  padding-right: 40px;

  & span {
    display: block;
    font-size: 40px;
    line-height: 40px;
  }

  @media (max-width: 1399px) {
    font-size: 60px;
    line-height: 72px;
  }
`;

export const Paragraph = styled.p`
  font-family: "DIN-Regular";
  font-size: 32px;
  line-height: 40px;
  padding-bottom: 1.5rem;
  padding-left: 2rem;

  &:nth-of-type(2) {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  @media (max-width: 1399px) {
    font-size: 30px;
    line-height: 37px;
  }
`;
