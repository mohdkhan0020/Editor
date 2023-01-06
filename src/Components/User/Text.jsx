import React from "react";
import { memo } from "react";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { FormControl} from "@mui/material";
import General from "../Settings/General";
import Decorations from "../Settings/Decorations";
import Dimension from "../Settings/Dimension";
import Typography from "../Settings/Typography";
// import { SketchPicker } from "react-color";
// import Dimension from "../Settings/Dimension";
// import Decorations from "../Settings/Decorations";
import Flex from "../Settings/Flex";

export const Text = ({
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
  background
}) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    actions: { setProp },
  } = useNode((state, node) => ({
    isActive: state.events.selected,
    hasSelectedNode: state.events.selected.size > 0,
    hasDraggedNode: state.events.dragged.size > 0,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <ContentEditable
        disabled={!editable}
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
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
          background
        }}
      />
    </div>
  );
};
memo(Text);

const TextSettings = () => {
  const [styles, setstyles] = useState(null);
  const [element, setelement] = useState(null);
  const {
    actions: { setProp },
    color,
  } = useNode((node) => {
    setelement(getComputedStyle(node.dom.firstChild));
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
  console.log(styles);

  return (
    <>
      <FormControl size="small" component="fieldset">
        <General setprop={setProp} color={color} />
        <Dimension setprop={setProp} color={color} />
        <Typography setprop={setProp} />
        <Decorations setprop={setProp} color={color} />
        <Flex setprop={setProp} />
      </FormControl>
    </>
  );
};
memo(TextSettings);

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20,
  },
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: TextSettings,
  },
};
