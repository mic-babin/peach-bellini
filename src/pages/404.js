import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.css";
import Header from "../components/common/header/header.component";
import Footer from "../components/common/footer/footer.component";
import styled from "styled-components";

export default function Error() {
  const color = "#efc08e";
  return (
    <Wrapper>
      <Header color={color} />
      <h1>404</h1>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;
