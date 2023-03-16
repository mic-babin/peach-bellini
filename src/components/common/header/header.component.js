import React, { useState } from "react";
import { Burger, Logo, Wrapper } from "./header.style";
import { Link } from "gatsby";
import Menu from "../menu/menu.component";
import Modal from "react-modal";
import { StaticImage } from "gatsby-plugin-image";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "auto",
    bottom: "auto",
    width: "100%",
    height: "100%",
    marginRight: "-50%",
    background: "transparent",
    overflow: "hidden",
    position: "fixed",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
};

const Header = ({ color }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }
  return (
    <Wrapper
      style={{ background: color || "transparent" }}
      className="container-fluid"
    >
      <Link to="../">
        <Logo>
          <StaticImage
            src="../../../../static/logo.svg"
            alt="logo"
            placeholder="none"
            layout="constrained"
          />
        </Logo>
      </Link>

      <Burger alt="" onClick={toggleModal} className={modalIsOpen && "is-open"}>
        <div className="menu-icon">
          <label for="toggleMenu">Menu</label>
          <input
            className="menu-icon__cheeckbox"
            name="toggleMenu"
            id="toggleMenu"
            type="checkbox"
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </Burger>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Menu modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}></Menu>
      </Modal>
    </Wrapper>
  );
};

export default Header;
