import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #f0cb6e, #f2d16f, #fff3b2);
`;

export const Text = styled.div`
  padding-bottom: 40px;
  color: #d04638;
  font-size: 40px;
  line-height: 60px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 7vw;
    line-height: 9vw;
  }
`;

export const Button = styled.div`
  margin: 0 1rem;
  min-width: 100px;
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
    min-width: 17vw;
    font-size: 4.5vw;
    line-height: 4.5vw;
  }
`;

export const Warning = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-family: "Lemon-Milk-Regula";

  text-align: center;
  @media (max-width: 576px) {
    font-size: 4vw;
    line-height: 4vw;
  }
`;
