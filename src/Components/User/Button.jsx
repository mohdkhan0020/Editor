import React from "react";
import { useState,useEffect } from "react";
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
  const [styles, setstyles] = useState(null);
  const [element, setelement] = useState(null);
  const {
    actions: { setProp },
    color,
    props,
  } = useNode((node) => {
    setelement(getComputedStyle(node.dom));
    // console.log(node.dom.style);
    return({
    props: node.data.props,
  })});
  function getCustomcss(element) {
    let a = [
      "display",
      "font-size",
      "text-align",
      "color",
      "float",
      "font-family",
      "top",
      "position",
      "bottom",
      "left",
      "right",
      "height",
      "width",
      "max-width",
      "min-height",
      "margin-top",
      "margin-left",
      "margin-right",
      "margin-bottom",
      "padding-top",
      "padding-left",
      "padding-right",
      "padding-bottom",
      "font-weight",
      "letter-spacing",
      "line-height",
      "opacity",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border",
      "flex-direction",
      "justify-content",
      "align-items",
      "align-self",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "border-style",
      "border-width",
    ];
    var css_data = {};
    for (var i = 0; i < a.length; i++) {
      css_data[a[i]] = element.getPropertyValue(a[i]);
    }
    return css_data
  }

  useEffect(() => {
    setstyles(getCustomcss(element))
  }, [element]);
  console.log(styles);

  return (
    <div >
      <FormControl size="small" component="fieldset">
        <General setprop={setProp} />
        <FormLabel component="legend">Size</FormLabel>

        <button
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
        </button>
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
