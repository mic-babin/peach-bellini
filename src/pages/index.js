import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.css";
import Header from "../components/header/header.component";
import Hero from "../components/hero/hero.component";
import About from "../components/about/about.component";
import PeachBellini from "../components/peach-bellini/peach-bellini.component";
import HardSeltzer from "../components/hard-seltzer/hard-seltzer.component";
import CallToAction from "../components/call-to-action/call-to-action.component";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <PeachBellini />
      <HardSeltzer />
      <CallToAction />
    </>
  );
}
