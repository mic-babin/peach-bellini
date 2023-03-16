import React from "react";
import BubbleSrc from "../../../static/bubble.svg";
import PeachSrc from "../../../static/peach.svg";
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
              <H2>HARD SELTZER</H2>
              <Description>
                No weak sauce seltzers here—Clubtails Hard Seltzers are packed
                with cocktail flavour and punch! Each can serves 7% alcohol and
                only 2 grams of sugar!
              </Description>
              <List>
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
            <div className="col-lg-6 d-flex justify-content-center align-items-center  py-sm-5 py-lg-0">
              <CanWrapper>
                <div className="can">
                  <StaticImage
                    src="../../../static/Seltzer_Berry.png"
                    alt="Strawberry Daiquiri Hard Seltzer"
                    placeholder="none"
                    layout="constrained"
                  />
                </div>
                <img className="bubble" src={BubbleSrc} alt="" />
                <span>🍓</span>
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
                <img className="bubble" src={BubbleSrc} alt="" />
                <span>🍒</span>
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
                <img className="bubble" src={BubbleSrc} alt="" />
                <span>
                  <img src={PeachSrc} alt="" />
                </span>
              </CanWrapper>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default HardSeltzer;
