// components/user/Card.js
import React from "react";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { ContainerDefaultProps } from "./Container";
import { ContainerSettings } from "./Container";
import { Text } from "./Text";
import ContentEditable from "react-contenteditable";
import { Button } from "./Button";
import { Element, useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@mui/material";

import { FormControl } from "@mui/material";
import General from "../Settings/General";
import Decorations from "../Settings/Decorations";
import Dimension from "../Settings/Dimension";
import Typography from "../Settings/Typography";
import Flex from "../Settings/Flex";

import { Container } from "./Container";

export const ColumnChild = ({
  text,
  children,
  fontSize,
  textAlign,
  color,
  fontFamily,
  position,
  width,
  height,
  maxWidth,
  minHeight,
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
  letterSpacing,
  lineHeight,
  border,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  flexGrow,
  flexShrink,
  flexBasis,
  borderStyle,
  borderWidth,
}) => {
  return (
    <div
      className="text-only"
      style={{
        width: "100%",
        height: "100%",
        padding: "5px",
        margin: "3px",
        background: "#00d",
      }}
    >
      <Element
        height="95px"
        style={{
          text,
          children,
          fontSize,
          textAlign,
          color,
          fontFamily,
          position,
          width,
          height,
          maxWidth,
          minHeight,
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
          letterSpacing,
          lineHeight,
          border,
          flexDirection,
          justifyContent,
          alignItems,
          alignSelf,
          flexGrow,
          flexShrink,
          flexBasis,
          borderStyle,
          borderWidth,
        }}
        id="columnFirst1"
        is={Container}
        canvas
      ></Element>
    </div>
  );
};

export const Column = ({
  text,
  children,
  fontSize,
  textAlign,
  color,
  fontFamily,
  position,
  width,
  height,
  maxWidth,
  minHeight,
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
  letterSpacing,
  lineHeight,
  border,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  flexGrow,
  flexShrink,
  flexBasis,
  borderStyle,
  borderWidth,
  background,
  padding,
}) => {
  return (
    <Paper
      style={{
        text,
        children,
        fontSize,
        textAlign,
        color,
        fontFamily,
        position,
        width,
        height,
        maxWidth,
        minHeight,
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
        letterSpacing,
        lineHeight,
        border,
        flexDirection,
        justifyContent,
        alignItems,
        alignSelf,
        flexGrow,
        flexShrink,
        flexBasis,
        borderStyle,
        borderWidth,
        background,
        padding,
      }}
      background={background}
      padding={padding}
      height={`100px`}
      className="kkkkk"
    >
      <Element id="columnFirst" is={ColumnChild} canvas></Element>
    </Paper>
  );
};

const ColumnSettings = () => {
  const {
    actions: { setProp },
    color,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));
  return (
    <>
      <FormControl size="small" component="fieldset">
        <Typography setprop={setProp} color={color} />
        <General setprop={setProp} color={color} />
        <Flex setprop={setProp} />
        <Decorations setprop={setProp} color={color} />
        <Dimension setprop={setProp} color={color} />
        <MaterialButton
          variant="contained"
          // color="default"
          onClick={() => {
            // actions.delete(selected.id);
          }}
        >
          Delete
        </MaterialButton>
      </FormControl>
    </>
  );
};

Column.craft = {
  props: {
    text: "Hi",
    fontSize: 50,
  },
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: ColumnSettings,
  },
};
