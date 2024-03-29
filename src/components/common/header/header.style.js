import styled from "styled-components";
import { motion } from "framer-motion";

export const Logo = styled(motion.div)`
  max-width: 250px;
  margin-left: 40px;
  margin-top: 25px;
  margin-bottom: 25px;

  @media (max-width: 576px) {
    margin-left: 0;
    max-width: 45vw;
  }
`;

export const Burger = styled(motion.div)`
  height: 50px;
  width: 50px;
  right: 20px;
  top: 20px;
  position: fixed;
  z-index: 1000;

  label {
    height: 0;
    width: 0;
    opacity: 0;
  }

  .menu-icon {
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transform: scale(2);

    .menu-icon__cheeckbox {
      margin-top: -20px;
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
    }

    div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 22px;
      height: 12px;
    }
    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background-color: #000;
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

      &:first-of-type {
        top: 0;
      }
      &:last-of-type {
        bottom: 0;
      }
    }
    &.active,
    .menu-icon__cheeckbox:checked + div {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 5px;
          background-color: rgb(249, 238, 127);
          box-shadow: 0 0 6px rgba(245, 237, 150, 0.5),
            0 0 10px rgba(245, 237, 150, 0.5), 0 0 21px rgba(245, 237, 150, 0.5);
        }
        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 5px;
          background-color: rgb(249, 238, 127);
          box-shadow: 0 0 6px rgba(245, 237, 150, 0.5),
            0 0 10px rgba(245, 237, 150, 0.5), 0 0 21px rgba(245, 237, 150, 0.5);
        }
      }
    }

    &.active:hover span:first-of-type,
    &.active:hover span:last-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
      width: 22px;
    }

    &:hover {
      // no need hover effect on mobile.
      @media (min-width: 1024px) {
        span:first-of-type {
          width: 26px;
        }

        span:last-of-type {
          width: 12px;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  padding: 0;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;
