import React, { useState } from "react";
import { Burger, Logo, Wrapper } from "./header.style";
import { Link } from "gatsby";
import Menu from "../menu/menu.component";
import Modal from "react-modal";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

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
        <Logo
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 30, opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            type: "spring",
          }}
          viewport={{ once: true }}
        >
          <StaticImage
            src="../../../../static/logo.svg"
            alt="logo"
            placeholder="none"
            layout="constrained"
          />
        </Logo>
      </Link>

      <Burger
        alt=""
        onClick={toggleModal}
        id="burger"
        className={modalIsOpen && "is-open"}
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 30, opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          type: "spring",
        }}
        viewport={{ once: true }}
      >
        <div className="menu-icon">
          <label htmlFor="toggleMenu">Menu</label>
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
        ariaHideApp={false}
      >
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            type: "spring",
          }}
        >
          <Menu modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}></Menu>
        </motion.div>
      </Modal>
    </Wrapper>
  );
};

export default Header;
