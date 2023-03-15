import React from "react";
import LogoSrc from "../../../static/logo.svg";
import BurgerSrc from "../../../static/hamburger.svg";
import { Burger, Logo, Wrapper } from "./header.style";

const Header = () => {
  return (
    <Wrapper className="container-fluid">
      <Logo src={LogoSrc} alt="" />
      <Burger src={BurgerSrc} alt="" />
    </Wrapper>
  );
};

export default Header;
