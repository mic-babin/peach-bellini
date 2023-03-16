import styled from "styled-components";

export const Wrapper = styled.div`
  background: #efc08e;
  max-width: 100vw;
`;

export const Container = styled.div`
  padding-top: 25px;
  padding-bottom: 100px;

  @media (max-width: 991px) {
    padding-bottom: 50px;
  }
`;

export const CanWrapper = styled.div`
  position: relative;
  .can img {
    height: 100%;
  }

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

  @media (max-width: 1699px) {
    padding-top: 50px;
    .can {
      width: 189px;
    }
    .bubble {
      position: absolute;
      top: -108px;
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

  @media (max-width: 1299px) {
    padding-top: 100px;
    .can {
      width: 169px;
    }
    .bubble {
      top: -40px;
    }
    span {
      top: 0px;
    }
  }
  @media (max-width: 767px) {
    padding-top: 100px;
    .can {
      width: 149px;
    }
    .bubble {
      top: -25px;
    }
    span {
      top: 5px;
      font-size: 30px;

      img {
        height: 30px;
      }
    }
  }
  @media (max-width: 567px) {
    padding-top: 100px;
    .can {
      width: 25vw;
    }
    .bubble {
      top: calc(95px - 20vw);
    }
    span {
      top: calc(120px - 20vw);
      font-size: 5vw;

      img {
        height: 5vw;
      }
    }
  }
`;
