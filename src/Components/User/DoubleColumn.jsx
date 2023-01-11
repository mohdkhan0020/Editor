import React from "react";
import { Container } from "./Container";
import { Element } from "@craftjs/core";
import { Paper } from "@mui/material";
import { useNode } from "@craftjs/core";
import { useEditor } from "@craftjs/core";
import { ContainerDefaultProps } from "./Container";
import { ContainerSettings } from "./Container";
import { Column, ColumnChild } from "./Column";

export const DoubleColumnChild = ({
  text,
  DoubleColumnChild,
  DoubleColumn,
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
    <>
      <div style={{ display: "flex" }}>
      
        {/* <div
          ref={connect}
          className="text-only"
          style={{
            minHeight: "50px",
            height: "88px",
            width: "355px",
            padding: "5px",
            margin: "3px",
            background: "#00d",
          }}
        >
          {children}
          <Element height="77px" id="double1" is={Container} canvas></Element>
        </div>

        <div
          ref={connect}
          className="txtrs"
          style={{
            minHeight: "50px",
            height: "88px",
            width: "355px",
            padding: "5px",
            margin: "3px",
            background: "#dd0",
          }}
        >
          {children}
          <Element height="77px" id="double2" is={Container} canvas>
          </Element>
        </div> */}
      </div>
    </>
  );
};

export const DoubleColumn = ({ background, padding }) => {
  return (
    <Container
      background={background}
      padding={"7px"}
      height={`140px`}
      className="kkkkk"
      text=""
      display={"flex"}
      width="770px"
      justifyContent={"space-evenly"}
    >
      <Element id="doubleColumn" style={{marginLeft:"55px"}} is={Column} ></Element>
      <Element id="doubleColumn1" is={Column} ></Element>
    </Container>
  );
};

DoubleColumn.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
