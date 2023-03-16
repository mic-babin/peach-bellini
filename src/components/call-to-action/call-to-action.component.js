import React from "react";
import { Wrapper, NeonText, NeonTextWrapper } from "./call-to-action.style";
import PeachSrc from "../../../static/peach-bg.png";

const CallToAction = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${PeachSrc})` }}>
      <NeonTextWrapper>
        <NeonText>hurry to the LCBO</NeonText>
        <NeonText>to try Clubtails</NeonText>
        <NeonText>Peach Bellini today.</NeonText>
      </NeonTextWrapper>
    </Wrapper>
  );
};

export default CallToAction;
