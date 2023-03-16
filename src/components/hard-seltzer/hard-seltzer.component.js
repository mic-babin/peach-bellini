import React from "react";
import BubbleSrc from "../../../static/bubble.svg";
import PeachSrc from "../../../static/peach.svg";
import { motion, spring } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { Wrapper, CanWrapper, Container } from "./hard-seltzer.style";
import {
  H2,
  Description,
  List,
  ListItem,
} from "../peach-bellini/peach-bellini.style";

const HardSeltzer = () => {
  return (
    <>
      <Wrapper id="hard-seltzer">
        <Container className="container">
          <div className="row">
            <div className="col-lg-6 pe-lg-5">
              <H2
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -200, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                HARD SELTZER
              </H2>
              <Description
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -200, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                No weak sauce seltzers here—Clubtails Hard Seltzers are packed
                with cocktail flavour and punch! Each can serves 7% alcohol and
                only 2 grams of sugar!
              </Description>
              <List
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -200, opacity: 0 }}
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
                  <span>🔥</span>2 g of sugar
                </ListItem>
                <ListItem>
                  <span>💦</span>3 g of carbs
                </ListItem>
                <ListItem>
                  <span>🚀</span>Available at TheBeerStore{" "}
                  <span className="d-inline d-lg-none d-xlg-inline">(TBS)</span>
                </ListItem>
              </List>
            </div>
            <motion.div
              className="col-lg-6 d-flex justify-content-center align-items-center  py-sm-5 py-lg-0"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                type: "spring",
              }}
              viewport={{ once: true }}
            >
              <CanWrapper>
                <div className="can">
                  <StaticImage
                    src="../../../static/Seltzer_Berry.png"
                    alt="Strawberry Daiquiri Hard Seltzer"
                    placeholder="none"
                    layout="constrained"
                  />
                </div>
                <div className="floating">
                  <img className="bubble" src={BubbleSrc} alt="" />
                  <span>🍓</span>
                </div>
              </CanWrapper>
              <CanWrapper>
                <div className="can">
                  <StaticImage
                    src="../../../static/Seltzer_Cherry.png"
                    alt="Black Cherry Margarita Hard Seltzer"
                    placeholder="none"
                    layout="constrained"
                  />
                </div>
                <div className="floating floating-2">
                  <img className="bubble" src={BubbleSrc} alt="" />
                  <span>🍒</span>
                </div>
              </CanWrapper>
              <CanWrapper>
                <div className="can">
                  <StaticImage
                    src="../../../static/Seltzer_Peach.png"
                    alt="White Peach Cosmo Hard Seltzer"
                    placeholder="none"
                    layout="constrained"
                  />
                </div>
                <div className="floating floating-3">
                  <img className="bubble" src={BubbleSrc} alt="" />
                  <span>
                    <img src={PeachSrc} alt="" />
                  </span>
                </div>
              </CanWrapper>
            </motion.div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default HardSeltzer;
