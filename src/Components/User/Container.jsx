import React from "react";
import { useState,useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { Paper, FormControl, FormLabel, Slider } from "@mui/material";
import { SketchPicker } from "react-color";
import General from "../Settings/General";
import Dimension from "../Settings/Dimension";
import Typography from "../Settings/Typography";
import Decorations from "../Settings/Decorations";
import Flex from "../Settings/Flex";

export const Container = ({
  text,
  background = "gray",
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
  height = "400px",
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
  const [editable, setEditable] = useState(false);
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  // console.log("children = =", children, "text = = ", text);
  // const {
  //   connectors: { connect, drag },
  // } = useNode();
  return (
    <Paper
      onClick={(e) => setEditable(true)}
      ref={(ref) => connect(drag(ref))}
      style={{
        text,
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

      <ContentEditable
        disabled={!editable}
        html={""}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="div"
      />
    </Paper>
  );
};

export const ContainerSettings = () => {
  const [styles, setstyles] = useState(null);
  const [element, setelement] = useState(null);
  const {
    actions: { setProp },
    color,
  } = useNode((node) => {
    setelement(getComputedStyle(node.dom));
    return {
      fontSize: node.data.props.fontSize,
    };
  });
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
  console.log("Container",styles);

  return (
    <>
      <FormControl size="small" component="fieldset">
        <General setprop={setProp} color={color} />
        <Dimension setprop={setProp} color={color} />
        <Typography setprop={setProp} color={color} />
        <Decorations setprop={setProp} color={color} />
        <Flex setprop={setProp} />
      </FormControl>
    </>
  );
};

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Container.craft = {
  props: {
    text: "",
    fontSize: 20,
  },
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: ContainerSettings,
  },
};
