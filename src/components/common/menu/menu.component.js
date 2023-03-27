import React, { useEffect, useState } from "react";
import { Overlay, MenuLinks, MenuLink } from "./menu.styles";
import { motion, AnimatePresence } from "framer-motion";
import { ModalAnimation } from "./menu.animation";

const Menu = ({ modalIsOpen, setIsOpen }) => {
  const close = () => {
    document.querySelector(".menu-icon__cheeckbox").click();
    setIsOpen(false);
  };
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);
  useEffect(() => {
    if (modalIsOpen) setTimeout(() => setShowMenu(true), 250);
  }, []);

  return (
    <Overlay>
      <AnimatePresence initial={false} custom={ModalAnimation}>
        {showMenu && (
          <MenuLinks
            variants={ModalAnimation}
            animate="visible"
            initial="hidden"
            exit="hidden"
          >
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
        )}
      </AnimatePresence>
    </Overlay>
  );
};

export default Menu;
