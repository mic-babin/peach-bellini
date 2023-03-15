import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.css";
import Header from "../components/common/header/header.component";
import Footer from "../components/common/footer/footer.component";
import styled from "styled-components";
import PrivacyDisclaimer from "../components/privacy-disclaimer/privacy-disclaimer.component";

export default function PrivacyPolicy() {
  const color = "#efc08e";
  return (
    <Wrapper>
      <Header color={color} />
      <PrivacyDisclaimer />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;
