import React from "react";
import { Container } from "./Container";
import { Element } from "@craftjs/core";
import { useNode } from "@craftjs/core";
import { useEditor } from "@craftjs/core";
import { ContainerDefaultProps } from "./Container";
import { ContainerSettings } from "./Container";
import { Column, ColumnChild } from "./Column";
import { DoubleColumn, DoubleColumnChild } from "./DoubleColumn";
import { ThreeColumn } from "./ThreeColumn";

export const FourColumnChild = ({
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
  const { connectors, query } = useEditor();
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <>
      <div style={{ display: "flex", width: "75.5%" }}>
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
            id="fourColumn1"
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
            id="fourColumn2"
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
            id="fourColumn3"
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
            background: "#dd0",
          }}
        >
          {children}
          <Element
            height="77px"
            id="fourColumn4"
            is={Container}
            canvas
          ></Element>
        </div>
      </div>
    </>
  );
};

export const FourColumn = ({ background, padding }) => {
  return (
    <Container
      background={background}
      padding={padding}
      height={`100px`}
      className="kkkkk"
      text=""
    >
      <Element id="fourColumn" is={FourColumnChild} canvas></Element>
      {/* <Element id="txts" is={DoubleColumnChild} canvas></Element> */}
    </Container>
  );
};

FourColumn.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
