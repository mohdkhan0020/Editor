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
  // const [editable, setEditable] = useState(false);
  // const {
  //   connectors: { connect, drag },
  //   actions: { setProp },
  // } = useNode();
  return (
    <div
      // onClick={(e) => setEditable(true)}
      className="text-only"
      style={{
        width: "100%",
        height: "100%",
        padding: "5px",
        margin: "3px",
        background: "#00d",
      }}
    >
      {/* {children} */}

      {/* <ContentEditable
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
        }}
      /> */}
      <Element height="90px" id="columnFirst1" is={Container} canvas>
        {/* Hello Buddy */}
      </Element>
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
  // const [editable, setEditable] = useState(false);

  return (
    <Paper
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

// // components/user/Card.js
// import React from "react";
// import { useEffect, useState } from "react";
// import { ContainerDefaultProps } from "./Container";
// import { ContainerSettings } from "./Container";
// import { Text } from "./Text";
// import ContentEditable from "react-contenteditable";
// import { Button } from "./Button";
// import { Element, useNode } from "@craftjs/core";
// import { Button as MaterialButton } from "@mui/material";

// import { FormControl } from "@mui/material";
// import General from "../Settings/General";
// import Decorations from "../Settings/Decorations";
// import Dimension from "../Settings/Dimension";
// import Typography from "../Settings/Typography";
// import Flex from "../Settings/Flex";

// import { Container } from "./Container";

// export const ColumnChild = ({
//   text,
//   children,
//   fontSize,
//   textAlign,
//   color,
//   fontFamily,
//   position,
//   width,
//   height,
//   maxWidth,
//   minHeight,
//   fontWeight,
//   borderTopLeftRadius,
//   borderTopRightRadius,
//   borderBottomRightRadius,
//   borderBottomLeftRadius,
//   opacity,
//   display,
//   top,
//   right,
//   left,
//   bottom,
//   float,
//   marginTop,
//   marginLeft,
//   marginRight,
//   marginBottom,
//   paddingTop,
//   paddingLeft,
//   paddingRight,
//   paddingBottom,
//   textDecoration,
//   textShadow,
//   letterSpacing,
//   lineHeight,
//   border,
//   flexDirection,
//   justifyContent,
//   alignItems,
//   alignSelf,
//   flexGrow,
//   flexShrink,
//   flexBasis,
//   borderStyle,
//   borderWidth,
// }) => {
//   return (
//     <div
//       className="text-only"
//       style={{
//         width: "100%",
//         height: "100%",
//         padding: "5px",
//         margin: "3px",
//         background: "#00d",
//       }}
//     >
//       {/* <h1>aslkdhlas</h1> */}
//       {children}
//       <Element height="90px" id="columnFirst1" is={Container} canvas>
//         Hello Buddy
//       </Element>
//     </div>
//   );
// };

// export const Column = ({
//   text,
//   children,
//   fontSize,
//   textAlign,
//   color,
//   fontFamily,
//   position,
//   width,
//   height,
//   maxWidth,
//   minHeight,
//   fontWeight,
//   borderTopLeftRadius,
//   borderTopRightRadius,
//   borderBottomRightRadius,
//   borderBottomLeftRadius,
//   opacity,
//   display,
//   top,
//   right,
//   left,
//   bottom,
//   float,
//   marginTop,
//   marginLeft,
//   marginRight,
//   marginBottom,
//   paddingTop,
//   paddingLeft,
//   paddingRight,
//   paddingBottom,
//   textDecoration,
//   textShadow,
//   letterSpacing,
//   lineHeight,
//   border,
//   flexDirection,
//   justifyContent,
//   alignItems,
//   alignSelf,
//   flexGrow,
//   flexShrink,
//   flexBasis,
//   borderStyle,
//   borderWidth,
//   background,
//   padding,
// }) => {
//   return (
//     <Container
//       background={background}
//       padding={padding}
//       height={`100px`}
//       className="kkkkk"
//     >
//       <Element id="columnFirst" is={ColumnChild} canvas></Element>
//     </Container>
//   );
// };

// const TextSettings = () => {
//   const {
//     actions: { setProp },
//     color,
//     // fontSize,
//     // textAlign,
//     // float,
//     // fontFamily,
//     // display,
//     // position,
//     // top,
//     // right,
//     // bottom,
//     // left,
//     // width,
//     // height,
//     // maxWidth,
//     // minHeight,
//     // marginTop,
//     // marginLeft,
//     // marginRight,
//     // marginBottom,
//     // paddingTop,
//     // paddingLeft,
//     // paddingRight,
//     // paddingBottom,
//     // fontWeight,
//     // letterSpacing,
//     // lineHeight,
//     // opacity,
//     // borderTopRightRadius,
//     // borderTopLeftRadius,
//     // borderBottomRightRadius,
//     // borderBottomLeftRadius,
//     // border,
//     // flexDirection,
//     // justifyContent,
//     // alignItems,
//     // alignSelf,
//     // flexGrow,
//     // flexShrink,
//     // flexBasis
//   } = useNode((node) => ({
//     fontSize: node.data.props.fontSize,
//   }));

//   return (
//     <>
//       <FormControl size="small" component="fieldset">
//         <Typography setprop={setProp} color={color} />
//         <General setprop={setProp} color={color} />
//         <Flex setprop={setProp} />
//         <Decorations setprop={setProp} color={color} />
//         <Dimension setprop={setProp} color={color} />
//       </FormControl>
//     </>
//   );
// };

// Column.craft = {
//   props: ContainerDefaultProps,
//   related: {
//     // Since Card has the same settings as Container, we'll just reuse ContainerSettings
//     settings: ContainerSettings,
//   },
// };
