import React from "react";
import BubbleSrc from "../../../static/cloud.png";
import { motion } from "framer-motion";
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
                  <span className="img">
                    <StaticImage
                      src="../../../static/lightning.png"
                      alt="Lightning"
                      placeholder="none"
                      layout="constrained"
                    />
                  </span>
                  7% alcohol
                </ListItem>
                <ListItem>
                  <span className="img">
                    <StaticImage
                      src="../../../static/fire.png"
                      alt="Fire"
                      placeholder="none"
                      layout="constrained"
                    />
                  </span>
                  2 g of sugar
                </ListItem>
                <ListItem>
                  <span className="img">
                    <StaticImage
                      src="../../../static/water.png"
                      alt="Water"
                      placeholder="none"
                      layout="constrained"
                    />
                  </span>
                  3 g of carbs
                </ListItem>
                <ListItem>
                  <span className="img">
                    <StaticImage
                      src="../../../static/rocket.png"
                      alt="Rocket"
                      placeholder="none"
                      layout="constrained"
                    />
                  </span>
                  Available at TheBeerStore{" "}
                  <span className="d-inline d-none d-sm-inline d-lg-none d-xlg-inline">
                    (TBS)
                  </span>
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
                  <span className="img">
                    <StaticImage
                      src="../../../static/berry.png"
                      alt="Berry"
                      placeholder="none"
                      layout="constrained"
                    />
                  </span>
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
                <div className="floating ">
                  <img className="bubble" src={BubbleSrc} alt="" />
                  <span className="img">
                    <StaticImage
                      src="../../../static/cherry.png"
                      alt="Cherry"
                      placeholder="none"
                      layout="constrained"
                    />
                  </span>
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
                <div className="floating ">
                  <img className="bubble" src={BubbleSrc} alt="" />
                  <span className="img peach">
                    <StaticImage
                      src="../../../static/peach.svg"
                      alt="Peach"
                      placeholder="none"
                      layout="constrained"
                    />
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
