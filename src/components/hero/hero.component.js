import React from "react";
import {
  Bg,
  H2,
  H1,
  Button,
  Can,
  NeonWord,
  NeonWrapper,
  ButtonWrapper,
} from "./hero.styles";
import { opacity, opacityTimes } from "./hero.animation";
import { StaticImage } from "gatsby-plugin-image";
import { spring, motion } from "framer-motion";

const Hero = () => {
  return (
    <Bg>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content=center h-100 text-lg-start text-center">
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
              Looking for
              <span className="img d-inline-block">
                <StaticImage
                  src="../../../static/peach.svg"
                  alt="Peach"
                  placeholder="none"
                  layout="constrained"
                />
              </span>
              ?
            </H2>
            <H1
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -200, opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                type: "spring",
              }}
              viewport={{ once: true }}
            >
              READY-TO-DRINK
              <br /> PEACH BELLINI
            </H1>
            <ButtonWrapper
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.4,
                type: "spring",
              }}
              viewport={{ once: true }}
            >
              <Button to="../#about">Learn more</Button>
            </ButtonWrapper>
          </div>
          <motion.div
            className="col-lg-6 position-relative"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <Can>
              <StaticImage
                src="../../../static/hero.png"
                alt="Peach Bellini Can"
                placeholder="none"
              />
            </Can>
            <NeonWrapper>
              <NeonWord
                initial={{ opacity: 0.4 }}
                animate={opacity}
                transition={{
                  times: opacityTimes,
                  type: spring,
                  duration: 2.25,
                  delay: 0.25,
                  repeat: Infinity,
                  repeatDelay: 1.3,
                }}
              >
                easy
              </NeonWord>
              <NeonWord
                initial={{ opacity: 0.4 }}
                animate={opacity}
                transition={{
                  times: opacityTimes,
                  type: spring,
                  duration: 2.25,
                  delay: 0.3,
                  repeat: Infinity,
                  repeatDelay: 1.3,
                }}
              >
                peezy
              </NeonWord>
              <NeonWord
                initial={{ opacity: 0.4 }}
                animate={opacity}
                transition={{
                  times: opacityTimes,
                  type: spring,
                  duration: 2.25,
                  delay: 1.75,
                  repeat: Infinity,
                  repeatDelay: 1.3,
                }}
              >
                peachy
              </NeonWord>
              <NeonWord
                initial={{ opacity: 0.4 }}
                animate={opacity}
                transition={{
                  times: opacityTimes,
                  type: spring,
                  duration: 2.25,
                  delay: 1.7,
                  repeat: Infinity,
                  repeatDelay: 1.3,
                }}
              >
                squeezy
              </NeonWord>
              {/* <NeonWord>easy</NeonWord>
              <NeonWord>peezy</NeonWord>
              <NeonWord>peachy</NeonWord>
              <NeonWord>squeezy</NeonWord> */}
            </NeonWrapper>
          </motion.div>
        </div>
      </div>
    </Bg>
  );
};

export default Hero;
