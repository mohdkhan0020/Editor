// components/user/Container.js
import React from "react";
import { useNode } from "@craftjs/core";
import { Paper, FormControl, FormLabel, Slider } from "@mui/material";
import { SketchPicker } from 'react-color';
import General from "../Settings/General";
import Dimension from "../Settings/Dimension";
import Typography from "../Settings/Typography";
import Decorations from "../Settings/Decorations";
import Flex from "../Settings/Flex";

export const Container = ({ 
  text,
  background,
  padding,
  children,
  minHeight,
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
  fontSize, 
  textAlign,
  color,
  fontFamily,
  position,
  width,
  height='200px',
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
  textShadow }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{
        display,
        fontSize,
        textAlign,
        color,
        float,
        fontFamily,
        top,
        position,
        bottom,
        left,
        right,
        height,
        width,
        maxWidth,
        minHeight,
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
        paddingTop,
        paddingLeft,
        paddingRight,
        paddingBottom,
        fontWeight,
        opacity,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
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
        
        
      }}
    >
      {children}
    </Paper>
  );
};

export const ContainerSettings = () => {
  const {  
    actions: { setProp },
    fontSize,
    background,
    color,
    textAlign,
    float,
    fontFamily,
    display,
    position,
    top,
    right,
    bottom,
    left,
    width,
    height,
    maxWidth,
    minHeight,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    fontWeight,
    letterSpacing,
    lineHeight,
    opacity,
    borderTopRightRadius,
    borderTopLeftRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    border,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    flexGrow,
    flexShrink,
    flexBasis

  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));
 
  return (
    <>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
      <General setProp={setProp} color={color} />
        <Dimension setProp={setProp}/>
        <Typography setProp={setProp}/>
        <Decorations setProp={setProp}/>
        <Flex setProp={setProp}/>

        </FormControl>
        
    </>
  );
};

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Container.craft = {
  related: {
    settings: ContainerSettings,
  },
};
