import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
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
  const path = useRef();
  const text = "lovely and peachy" + " ".repeat(3);
  let textArr = text.repeat(4);
  const h = document.documentElement;
  const b = document.body;
  let timer = 0;

  const [neonText, setNeonText] = useState(textArr);

  useEffect(() => {
    setInterval(() => {
      textArr = textArr.concat(text);
      setNeonText(textArr);
    }, 6000);

    if (path) {
      setInterval(() => {
        timer++;
        let percent =
          (timer /
            ((h["scrollHeight"] || b["scrollHeight"]) - h.clientHeight)) *
          -100;

        path.current.setAttribute("startOffset", percent * 80);
      }, 30);
    }
  }, []);

  return (
    <>
      <Wrapper id="peach-bellini">
        <PinkWave src={PinkSrc} alt="" />
        <CurbTextWrapper>
          <div>
            <svg width="100vw" height="510px" viewBox="0 0 1200.72 89.55">
              <path
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
                  {neonText.replace(/ /g, "\u00A0")}
                </textPath>
              </text>
            </svg>
          </div>
        </CurbTextWrapper>
        <Container className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <Image
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                <StaticImage
                  src="../../../static/Peach Bellini.png"
                  alt="Peach Bellini Can with Peaches"
                  placeholder="none"
                  layout="constrained"
                />
              </Image>
            </div>
            <div className="col-lg-6">
              <H2
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                PEACH BELLINI
              </H2>
              <Description
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                You bet your peaches it’s tasty! Inspired by the classic Bellini
                cocktail, Clubtails Peach Bellini is bursting with juicy peach
                flavour!
              </Description>
              <List
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
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
                    <span className="img">
                      <StaticImage
                        src="../../../static/peach.svg"
                        alt="Peach"
                        placeholder="none"
                        layout="constrained"
                      />
                    </span>
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
