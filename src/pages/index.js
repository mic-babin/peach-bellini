import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.css";
import Header from "../components/common/header/header.component";
import Hero from "../components/hero/hero.component";
import About from "../components/about/about.component";
import PeachBellini from "../components/peach-bellini/peach-bellini.component";
import HardSeltzer from "../components/hard-seltzer/hard-seltzer.component";
import CallToAction from "../components/call-to-action/call-to-action.component";
import Footer from "../components/common/footer/footer.component";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <About />
      <PeachBellini />
      <HardSeltzer />
      <CallToAction />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;
