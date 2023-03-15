import React from "react";
import BerryCanSrc from "../../../static/Seltzer_Berry.png";
import PeachCanSrc from "../../../static/Seltzer_Peach.png";
import CherryCanSrc from "../../../static/Seltzer_Cherry.png";
import BubbleSrc from "../../../static/bubble.svg";
import PeachSrc from "../../../static/peach.svg";
import {
  Wrapper,
  Can,
  H2,
  Description,
  List,
  ListItem,
  Container,
  LeftCol,
} from "./hard-seltzer.style";

const HardSeltzer = () => {
  return (
    <>
      <Wrapper>
        <Container className="container">
          <div className="row">
            <LeftCol className="col-lg-6 pe-5">
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
                  <span>🚀</span>Available at TheBeerStore (TBS)
                </ListItem>
              </List>
            </LeftCol>
            <div className="col-lg-6 d-flex">
              <Can>
                <img src={BerryCanSrc} alt="" />
                <img className="bubble" src={BubbleSrc} alt="" />
                <span>🍓</span>
              </Can>
              <Can>
                <img src={CherryCanSrc} alt="" />
                <img className="bubble" src={BubbleSrc} alt="" />
                <span>🍒</span>
              </Can>
              <Can>
                <img src={PeachCanSrc} alt="" />
                <img className="bubble" src={BubbleSrc} alt="" />
                <span>
                  <img src={PeachSrc} alt="" />
                </span>
              </Can>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default HardSeltzer;
