import styled from "styled-components";

export const Wrapper = styled.div`
  background: #efc08e;
  max-width: 100vw;
  /* overflow-x: hidden; */
`;

export const Container = styled.div`
  padding-top: 25px;
  padding-bottom: 100px;
`;

export const LeftCol = styled.div``;

export const Can = styled.div`
  position: relative;

  .bubble {
    position: absolute;
    top: -185px;
    left: 70%;
  }

  span {
    position: absolute;
    top: -133px;
    left: 92%;
    font-size: 45px;

    img {
      height: 45px;
    }
  }

  @media (max-width: 1399px) {
    padding-top: 50px;
    .can {
      height: 500px;
    }
    .bubble {
      position: absolute;
      top: -105px;
      width: 90%;
      left: 70%;
    }
    span {
      position: absolute;
      top: -58px;
      left: 95%;
      font-size: 37px;

      img {
        height: 37px;
      }
    }
  }
`;
export const H2 = styled.h2`
  padding-top: 25px;
  color: #000000;
  font-size: 75px;
  line-height: 90px;
  font-family: "Lemon-Milk-Medium";
  text-transform: uppercase;

  @media (max-width: 1399px) {
    font-size: 60px;
    line-height: 72px;
  }
`;
export const Description = styled.p`
  font-family: "DIN-Regular";
  font-size: 32px;
  line-height: 40px;
  padding: 1.5rem 0;
  @media (max-width: 1399px) {
    font-size: 28px;
    line-height: 35px;
  }
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

  @media (max-width: 1399px) {
    font-size: 28px;
    line-height: 35px;
  }
`;
