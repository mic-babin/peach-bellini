import React from "react";
import PeachSrc from "../../../static/peach.svg";
import HeroSrc from "../../../static/hero.png";
import { BG, H2, H1, Button, Can, NeonWord, NeonWrapper } from "./hero.styles";

const Hero = () => {
  return (
    <BG>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content=center h-100">
            <H2>
              Looking for
              <img src={PeachSrc} />?
            </H2>
            <H1>
              READY-TO-DRINK
              <br /> PEACH BELLINI
            </H1>
            <Button>Learn more</Button>
          </div>
          <div className="col-lg-6 position-relative">
            <Can src={HeroSrc} />
            <NeonWrapper>
              <NeonWord>easy</NeonWord>
              <NeonWord>peezy</NeonWord>
              <NeonWord>peachy</NeonWord>
              <NeonWord>squeezy</NeonWord>
            </NeonWrapper>
          </div>
        </div>
      </div>
    </BG>
  );
};

export default Hero;
