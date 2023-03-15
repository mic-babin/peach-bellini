import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2d16f;
  background-repeat: repeat;
  background-size: 210px 210px;
  max-width: 100vw;
  padding: 200px 0;
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
`;
