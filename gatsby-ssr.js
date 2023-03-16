import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="static/LEMONMILK-Medium.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="LEMONMILK-Medium"
    />,
    <link
      rel="preload"
      href="static/acrotype-fixed.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Acrotype"
    />,
    <link
      rel="preload"
      href="static/DIN-Medium.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="DIN-Medium"
    />,
    <link
      rel="preload"
      href="static/DIN-Regular.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="DIN-Regular"
    />,
  ]);
};
