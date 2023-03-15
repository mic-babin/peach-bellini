import React from "react";
import PeachCanSrc from "../../../static/Peach Bellini.png";
import PeachSrc from "../../../static/peach.svg";
import PinkSrc from "../../../static/pink wave.svg";
import {
  Wrapper,
  CurbTextWrapper,
  CurbText,
  Image,
  H2,
  Description,
  List,
  ListItem,
  PinkWave,
  Container,
} from "./peach-bellini.style";

const PeachBellini = () => {
  return (
    <>
      <Wrapper>
        <PinkWave src={PinkSrc} alt="" />
        <CurbTextWrapper>
          <CurbText>lovely and peachy</CurbText>
        </CurbTextWrapper>
        <Container className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-end">
              <Image src={PeachCanSrc} alt="" />
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
