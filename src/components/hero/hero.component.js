import React from "react";
import PeachSrc from "../../../static/peach.svg";

import { Bg, H2, H1, Button, Can, NeonWord, NeonWrapper } from "./hero.styles";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <Bg>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content=center h-100 text-lg-start text-center">
            <H2>
              Looking for
              <img src={PeachSrc} alt="Peach" />?
            </H2>
            <H1>
              READY-TO-DRINK
              <br /> PEACH BELLINI
            </H1>
            <Button to="../#about">Learn more</Button>
          </div>
          <div className="col-lg-6 position-relative">
            <Can>
              <StaticImage
                src="../../../static/hero.png"
                alt="Peach Bellini Can"
                placeholder="none"
              />
            </Can>
            <NeonWrapper>
              <NeonWord>easy</NeonWord>
              <NeonWord>peezy</NeonWord>
              <NeonWord>peachy</NeonWord>
              <NeonWord>squeezy</NeonWord>
            </NeonWrapper>
          </div>
        </div>
      </div>
    </Bg>
  );
};

export default Hero;
