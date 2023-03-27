import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: end;
`;

export const MenuLinks = styled(motion.div)`
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const MenuLink = styled(Link)`
  font-family: "Acrotype";
  padding: 1rem;
  font-size: 45px;
  line-height: 45px;
  text-transform: lowercase;
  text-decoration: none;
  color: rgb(249, 238, 127);
  text-shadow: 0 0 6px rgba(245, 237, 150, 0.5),
    0 0 10px rgba(245, 237, 150, 0.5), 0 0 21px rgba(245, 237, 150, 0.5);

  &:hover {
    color: rgb(249, 238, 127);
    text-shadow: 0 0 9px rgba(245, 237, 150, 0.7),
      0 0 15px rgba(245, 237, 150, 0.7), 0 0 30px rgba(245, 237, 150, 0.7);
  }
`;
