// components/user/Card.js
import React from "react";
import { ContainerDefaultProps } from "./Container";
import { ContainerSettings } from "./Container";
import { Text } from "./Text";
import { Button } from "./Button";
import { Element, useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@mui/material";

import { Container } from "./Container";

export const ImageChild = ({
  text,
  background,
  padding,
  children,
  minHeight,
  fontSize,
  textAlign,
  color,
  fontFamily,
  position,
  width,
  height,
  maxWidth,
  maxHeight,
  fontWeight,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  opacity,
  display,
  top,
  right,
  left,
  bottom,
  float,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  textDecoration,
  textShadow,
}) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      ref={connect}
      className="text-only"
      style={{
        minHeight: "50px",
        padding: "10px",
        margin: "8px",
        background: "#fff",
      }}
    >
      <span>
        {/* <img src="" alt="" /> */}
        <input type="file" />
      </span>
      {children}
    </div>
  );
};

export const Image = ({ background, padding }) => {
  return (
    <Container
      text=""
      background={background}
      padding={padding}
      height={`100px`}
      className="kkkkk"
    >
      <Element id="text" is={ImageChild} canvas></Element>
    </Container>
  );
};

Image.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
