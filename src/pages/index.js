import * as React from "react";
import "../assets/styles/main.scss";
import Header from "../components/common/header/header.component";
import Hero from "../components/hero/hero.component";
import About from "../components/about/about.component";
import PeachBellini from "../components/peach-bellini/peach-bellini.component";
import HardSeltzer from "../components/hard-seltzer/hard-seltzer.component";
import CallToAction from "../components/call-to-action/call-to-action.component";
import Footer from "../components/common/footer/footer.component";
import styled from "styled-components";
import { SEO } from "../components/common/seo";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AgeWall from "../components/common/age-wall/age-wall.component";
import Modal from "react-modal";

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (localStorage.getItem("bellini-age")) setIsOpen(false);
  });

  return (
    <Wrapper>
      {!modalIsOpen && (
        <>
          <Header />
          <Hero />
          <About />
          <PeachBellini />
          <HardSeltzer />
          <CallToAction />
          <Footer />
        </>
      )}

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
          <AgeWall modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}></AgeWall>
        </motion.div>
      </Modal>
    </Wrapper>
  );
}

export const Head = () => <SEO />;

const Wrapper = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;

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
    backgroundColor: "rgb(239, 192, 142)",
  },
};
