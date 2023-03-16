import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PeachSrc from "../../../static/peach.svg";
import PinkSrc from "../../../static/pink wave.svg";
import { useEffect, useRef } from "react";
import {
  Wrapper,
  CurbTextWrapper,
  Image,
  H2,
  Description,
  List,
  ListItem,
  PinkWave,
  Container,
} from "./peach-bellini.style";

const PeachBellini = () => {
  const curve = useRef();
  const path = useRef();

  useEffect(() => {
    const h = document.documentElement;
    const b = document.body;

    if (path) {
      document.addEventListener("scroll", (e) => {
        console.log("scroll");
        let percent =
          ((h["scrollTop"] || b["scrollTop"]) /
            ((h["scrollHeight"] || b["scrollHeight"]) - h.clientHeight)) *
          100;

        path.current.setAttribute("startOffset", percent * 30 - 1300);
      });

      return () => {};
    }
  }, [curve, path]);

  return (
    <>
      <Wrapper id="peach-bellini">
        <PinkWave src={PinkSrc} alt="" />
        <CurbTextWrapper>
          <div>
            <svg width="100vw" height="510px" viewBox="0 0 1200.72 89.55">
              <path
                ref={curve}
                id="curve"
                fill="transparent"
                d="M0,160 C420,280 700,0 1200,160 "
              ></path>
              <text width="100%" style={{ transform: "translate3d(0,0,0)" }}>
                <textPath
                  style={{
                    transform: "translate3d(0,0,0)",
                  }}
                  alignmentBaseline="top"
                  xlinkHref="#curve"
                  startOffset="-1200px"
                  id="text-path"
                  ref={path}
                >
                  lovely and peachy&nbsp;&nbsp;&nbsp;lovely and
                  peachy&nbsp;&nbsp;&nbsp;lovely and
                  peachy&nbsp;&nbsp;&nbsp;lovely and
                  peachy&nbsp;&nbsp;&nbsp;lovely and
                  peachy&nbsp;&nbsp;&nbsp;lovely and peachy
                </textPath>
              </text>
            </svg>
          </div>
        </CurbTextWrapper>
        <Container className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <Image>
                <StaticImage
                  src="../../../static/Peach Bellini.png"
                  alt="Peach Bellini Can with Peaches"
                  placeholder="none"
                  layout="constrained"
                />
              </Image>
            </div>
            <div className="col-lg-6">
              <H2>PEACH BELLINI</H2>
              <Description>
                You bet your peaches it’s tasty! Inspired by the classic Bellini
                cocktail, Clubtails Peach Bellini is bursting with juicy peach
                flavour!
              </Description>
              <List>
                <ListItem>
                  <span>⚡</span>7% alcohol
                </ListItem>
                <ListItem>
                  <span>👅</span>Made with vodka
                </ListItem>
                <ListItem>
                  <span>📍</span>Produced in Ontario
                </ListItem>
                <ListItem>
                  <span>🚀</span>Available at the LCBO
                </ListItem>
                <ListItem>
                  <span>
                    <img src={PeachSrc} alt="" />
                  </span>
                  MADE WITH Natural Flavour
                </ListItem>
              </List>
            </div>
          </div>
        </Container>
        <img src={PinkSrc} alt="" />
      </Wrapper>
    </>
  );
};

export default PeachBellini;
