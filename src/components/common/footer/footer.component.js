import { Link } from "gatsby";
import React from "react";
import LogoSrc from "../../../../static/logo.svg";
import ModerationSrc from "../../../../static/moderation.svg";
import { Moderation, Wrapper, Logo, Contact } from "./footer.style";

const Footer = () => {
  return (
    <Wrapper id="contact">
      <Logo src={LogoSrc} alt="" />
      <Contact>
        <span>CONTACT US</span>
        <span>
          <a href="mailto:sac@groupeomnni.com">sac@groupeomnni.com</a>
        </span>
        <span>
          <a href="tel:450-661-0281">450-661-0281</a>
        </span>
        <span>
          <Link to="../privacy-policy">PRIVACY POLICY</Link>
        </span>
      </Contact>
      <Moderation src={ModerationSrc} alt="" />
    </Wrapper>
  );
};

export default Footer;
