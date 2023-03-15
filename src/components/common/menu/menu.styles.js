import styled from "styled-components";
import { Link } from "gatsby";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
`;

export const MenuLink = styled(Link)`
  font-family: "Acrotype";
  padding: 1rem;
  font-size: 45px;
  line-height: 45px;
  text-transform: lowercase;
  text-decoration: none;
  color: rgb(245, 237, 150);
  text-shadow: 0 0 6px rgba(245, 237, 150, 0.5),
    0 0 10px rgba(245, 237, 150, 0.5), 0 0 21px rgba(245, 237, 150, 0.5);

  &:hover {
    color: rgb(245, 237, 150);
    text-shadow: 0 0 9px rgba(245, 237, 150, 0.7),
      0 0 15px rgba(245, 237, 150, 0.7), 0 0 30px rgba(245, 237, 150, 0.7);
  }
`;
