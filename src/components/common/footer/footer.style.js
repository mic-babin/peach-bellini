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

  @media (max-width: 1449px) {
    padding-top: 60px;
    padding-bottom: 50px;
  }

  @media (max-width: 767px) {
    padding-bottom: 175px;
  }
`;

export const Logo = styled.div`
  max-width: 250px;

  @media (max-width: 576px) {
    max-width: 50vw;
  }
`;

export const Moderation = styled.img`
  position: absolute;
  bottom: 60px;
  right: 20px;
  max-height: 65px;

  @media (max-width: 1449px) {
    max-height: 65px;
    bottom: 50px;
  }

  @media (max-width: 1249px) {
    max-height: 50px;
    bottom: 50px;
  }
  @media (max-width: 1199px) {
    max-height: 70px;
    bottom: 50px;
  }
  @media (max-width: 767px) {
    right: 50%;
    transform: translateX(50%);
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

  @media (max-width: 1649px) {
    font-size: 25px;
    line-height: 25px;

    span {
      padding: 0 1rem;
    }
  }

  @media (max-width: 1199px) {
    font-size: 22px;
    line-height: 22px;
    flex-direction: column;
    span {
      padding: 1rem 1rem;
      border-left: none;
      text-align: center;
      border-top: 2px solid #000;

      &:first-of-type {
        border-top: none;
      }
    }
  }

  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 20px;
    flex-direction: column;
  }
`;
