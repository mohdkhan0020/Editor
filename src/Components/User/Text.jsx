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
  borderWidth
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
          borderWidth
        }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    color,
    // fontSize,
    // textAlign,
    // float,
    // fontFamily,
    // display,
    // position,
    // top,
    // right,
    // bottom,
    // left,
    // width,
    // height,
    // maxWidth,
    // minHeight,
    // marginTop,
    // marginLeft,
    // marginRight,
    // marginBottom,
    // paddingTop,
    // paddingLeft,
    // paddingRight,
    // paddingBottom,
    // fontWeight,
    // letterSpacing,
    // lineHeight,
    // opacity,
    // borderTopRightRadius,
    // borderTopLeftRadius,
    // borderBottomRightRadius,
    // borderBottomLeftRadius,
    // border,
    // flexDirection,
    // justifyContent,
    // alignItems,
    // alignSelf,
    // flexGrow,
    // flexShrink,
    // flexBasis
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <Typography setprop={setProp} color={color} /> 
        <General setprop={setProp} color={color} />
        <Flex setprop={setProp}/>
        <Decorations setprop={setProp} color={color} />
        <Dimension setprop={setProp} color={color} />
      </FormControl>
    </>
  );
};

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
// export default memo(Text);
