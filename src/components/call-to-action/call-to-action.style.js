import styled from "styled-components";

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
  @media (max-width: 1199px) {
    background-size: 20vw 21vw;
    padding: 20vw 0;
  }
`;

export const NeonTextWrapper = styled.div`
  transform: translate(5vw, 1.3vh);
`;

export const NeonText = styled.div`
  font-family: "Acrotype";
  color: #fff;
  font-size: 100px;
  line-height: 100px;
  text-shadow: 0 0 10px #fff, 0 0 21px #fff;
  transform: rotate(-10deg);

  &:nth-of-type(2) {
    transform: rotate(-10deg) translateX(-80px);
  }
  &:nth-of-type(3) {
    transform: rotate(-10deg) translateX(-40px);
  }
  @media (max-width: 1199px) {
    font-size: 9vw;
    line-height: 9vw;
    text-shadow: 0 0 10px #fff, 0 0 21px #fff;
    transform: rotate(-10deg);

    &:nth-of-type(2) {
      transform: rotate(-10deg) translateX(-8vw);
    }
    &:nth-of-type(3) {
      transform: rotate(-10deg) translateX(-4vw);
    }
  }
`;
