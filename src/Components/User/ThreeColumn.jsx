import React from "react";
import { Container } from "./Container";
import { Element } from "@craftjs/core";
import { useNode } from "@craftjs/core";
import { ContainerDefaultProps } from "./Container";
import { ContainerSettings } from "./Container";
import { Column, ColumnChild } from "./Column";
import { DoubleColumnChild } from "./DoubleColumn";

export const ThreeColumnChild = ({
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
  // console.log("children =", children);
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          ref={connect}
          className="text-only"
          style={{
            minHeight: "50px",
            minWidth: "32%",
            padding: "5px",
            margin: "3px",
            background: "#00d",
          }}
        >
          {children}
          <Element
            height="77px"
            id="threeColumn1"
            is={Container}
            canvas
          ></Element>
        </div>
        <div
          ref={connect}
          className="text-only"
          style={{
            minHeight: "50px",
            minWidth: "32%",
            padding: "5px",
            margin: "3px",
            background: "#0d0",
          }}
        >
          {children}
          <Element
            height="77px"
            id="threeColumn2"
            is={Container}
            canvas
          ></Element>
        </div>
        <div
          ref={connect}
          className="text-only"
          style={{
            minHeight: "50px",
            minWidth: "32%",
            padding: "5px",
            margin: "3px",
            background: "#d00",
          }}
        >
          {children}
          <Element
            height="77px"
            id="threeColumn3"
            is={Container}
            canvas
          ></Element>
        </div>
      </div>
    </>
  );
};

export const ThreeColumn = ({ background, padding }) => {
  return (
    <Container
      background={background}
      padding={padding}
      height={`75px`}
      className="kkkkk"
      text=""
    >
      <Element id="threeColumn" is={ThreeColumnChild} canvas></Element>
    </Container>
  );
};

ThreeColumn.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
