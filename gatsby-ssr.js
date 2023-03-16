import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/LEMONMILK-Medium.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="LEMONMILK-Medium"
    />,
    <link
      rel="preload"
      href="/fonts/acrotype-fixed.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Acrotype"
    />,
    <link
      rel="preload"
      href="/fonts/DIN-Medium.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="DIN-Medium"
    />,
    <link
      rel="preload"
      href="/fonts/DIN-Regular.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="DIN-Regular"
    />,
  ]);
};
