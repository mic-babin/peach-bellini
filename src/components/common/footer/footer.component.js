import { Link } from "gatsby";
import React from "react";
import ModerationSrc from "../../../../static/moderation.svg";
import { Moderation, Wrapper, Logo, Contact } from "./footer.style";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <Wrapper id="contact">
      <Link to="../">
        <Logo
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 30, opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            type: "spring",
          }}
          viewport={{ once: true }}
        >
          <StaticImage
            src="../../../../static/logo.svg"
            alt="logo"
            placeholder="none"
            layout="constrained"
          />
        </Logo>
      </Link>
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
