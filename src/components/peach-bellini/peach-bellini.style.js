import styled from "styled-components";

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
`;

export const Image = styled.img`
  height: 750px;
`;
export const H2 = styled.h2`
  padding-top: 25px;
  color: #000000;
  font-size: 75px;
  line-height: 90px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;
`;
export const Description = styled.p`
  font-family: "DIN-Regular";
  font-size: 32px;
  line-height: 40px;
  padding: 1.5rem 0;
`;
export const List = styled.ul`
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

  img {
    height: 35px;
  }

  span {
    display: inline-block;
    text-align: center;
    margin-right: 1.5rem;
    width: 40px;
  }
`;

export const CurbTextWrapper = styled.div``;
export const CurbText = styled.div``;