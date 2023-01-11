import React from "react";
import { useState } from "react";
import { useNode } from "@craftjs/core";
import General from "../Settings/General";
import Decorations from "../Settings/Decorations";
import Dimension from "../Settings/Dimension";
import Typography from "../Settings/Typography";
import Flex from "../Settings/Flex";
import {
  Button as MaterialButton,
  Grid,
  FormControl,
  MenuItem,
  Select,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
// import ButtonGeneral from "../Settings/ButtonGeneral";

export const Button = ({
  size,
  background,
  variant,
  color,
  children,
  text,
  fontSize,
  textAlign,
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
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <button
      className="btn btn-info mb-3"
      style={{
        display,
        background,
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
        letterSpacing,
        lineHeight,
        opacity,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
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
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
    >
      {text}
    </button>
  );
};

const ButtonSettings = () => {
  const {
    actions: { setProp },
    color,
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="">
      <FormControl size="small" component="fieldset">
        <General setprop={setProp} />
        <FormLabel component="legend">Size</FormLabel>

        <Select
          defaultValue={props.size}
          onChange={(e) => setProp((props) => (props.size = e.target.value))}
        >
          <MenuItem
            label="Small"
            value="small"
            control={<Radio size="small" color="primary" />}
          >
            Small
          </MenuItem>
          <MenuItem
            label="Medium"
            value="medium"
            control={<Radio size="small" color="primary" />}
          >
            Medium
          </MenuItem>
          <MenuItem
            label="Large"
            value="large"
            control={<Radio size="small" color="primary" />}
          >
            Large
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Variant</FormLabel>

        <Select
          defaultValue={props.variant}
          onChange={(e) => setProp((props) => (props.variant = e.target.value))}
        >
          <MenuItem
            label="Text"
            value="text"
            control={<Radio size="small" color="primary" />}
          >
            Text
          </MenuItem>
          <MenuItem
            label="Outlined"
            value="outlined"
            control={<Radio size="small" color="primary" />}
          >
            Outlined
          </MenuItem>
          <MenuItem
            label="Contained"
            value="contained"
            control={<Radio size="small" color="primary" />}
          >
            Contained
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Color</FormLabel>

        <Select
          defaultValue={props.color}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
        >
          <MenuItem
            label="Default"
            value="success"
            control={<Radio size="small" color="default" />}
          >
            Success
          </MenuItem>
          <MenuItem
            label="Primary"
            value="primary"
            control={<Radio size="small" color="primary" />}
          >
            Primary
          </MenuItem>
          <MenuItem
            label="Seconday"
            value="secondary"
            control={<Radio size="small" color="primary" />}
          >
            Seconday
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" component="fieldset">
        <Dimension setprop={setProp} color={color} />
        <Typography setprop={setProp} />
        <Decorations setprop={setProp} color={color} />
        <Flex setprop={setProp} />
      </FormControl>
    </div>
  );
};

Button.craft = {
  props: {
    size: "small",
    variant: "contained",
    color: "primary",
    text: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
};
