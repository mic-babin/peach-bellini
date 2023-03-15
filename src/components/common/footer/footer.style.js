import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 63px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #efc08e;
  position: relative;

  max-width: 100vw;
  overflow: hidden;
`;

export const Logo = styled.img`
  max-height: 140px;

  @media (max-width: 1499px) {
    max-height: 120px;
  }
`;

export const Moderation = styled.img`
  position: absolute;
  bottom: 60px;
  right: 30px;
  max-height: 85px;

  @media (max-width: 1499px) {
    max-height: 70px;
  }
`;

export const Contact = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  font-family: "DIN-Regular";
  font-size: 32px;
  line-height: 32px;
  color: #000;

  span {
    padding: 0 1.5rem;
    border-left: 2px solid #000;

    &:first-of-type {
      font-family: "DIN-Medium";
      border-left: none;
    }
    &:last-of-type {
      font-family: "DIN-Medium";
    }
  }

  a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 1499px) {
    font-size: 28px;
    line-height: 28px;

    span {
      padding: 0 1rem;
    }
  }
`;
