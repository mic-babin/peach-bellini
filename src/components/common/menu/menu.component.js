import React from "react";
import { Overlay, MenuLinks, MenuLink } from "./menu.styles";

const Menu = ({ setIsOpen }) => {
  const close = () => {
    document.querySelector(".menu-icon__cheeckbox").click();
    setIsOpen(false);
  };

  return (
    <Overlay>
      <MenuLinks>
        <MenuLink
          onClick={() => {
            close();
          }}
          to="../#about"
        >
          ABOUT
        </MenuLink>
        <MenuLink
          onClick={() => {
            close();
          }}
          to="../#peach-bellini"
        >
          PEACH BELLINI
        </MenuLink>
        <MenuLink
          onClick={() => {
            close();
          }}
          to="../#hard-seltzer"
        >
          HARD SELTZER
        </MenuLink>
        <MenuLink
          onClick={() => {
            close();
          }}
          to="../#contact"
        >
          CONTACT
        </MenuLink>
      </MenuLinks>
    </Overlay>
  );
};

export default Menu;
