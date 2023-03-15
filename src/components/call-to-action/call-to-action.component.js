import React from "react";
import { Wrapper, NeonText } from "./call-to-action.style";
import PeachSrc from "../../../static/peach-bg.png";

const CallToAction = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${PeachSrc})` }}>
      <NeonText>hurry to the LCBO</NeonText>
      <NeonText>to try Clubtails</NeonText>
      <NeonText>Peach Bellini today.</NeonText>
    </Wrapper>
  );
};

export default CallToAction;
