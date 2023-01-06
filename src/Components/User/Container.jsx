// components/user/Container.js
import React from "react";
import { useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import {
  Paper,
  FormControl,
  FormLabel,
  Slider,
  Button as MaterialButton,
} from "@mui/material";
import { SketchPicker } from "react-color";
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
  height = "200px",
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
        text: "",
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
        // value="text"
        // name="editableContainer"
        disabled={!editable}
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
      />
      {/* {children} */}
    </Paper>
  );
};

export const ContainerSettings = () => {
  const {
    actions: { setProp },
    color,
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

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

// Container.craft = {
//   related: {
//     settings: ContainerSettings,
//   },
// };

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

// // components/user/Container.js
// import React from "react";
// import { useNode } from "@craftjs/core";
// import { Paper, FormControl, FormLabel, Slider } from "@mui/material";
// import { SketchPicker } from "react-color";
// import General from "../Settings/General";
// import Dimension from "../Settings/Dimension";
// import Typography from "../Settings/Typography";
// import Decorations from "../Settings/Decorations";
// import Flex from "../Settings/Flex";

// export const Container = ({
//   text,
//   background,
//   padding,
//   children,
//   minHeight,
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
//   fontSize,
//   textAlign,
//   color,
//   fontFamily,
//   position,
//   width,
//   height = "200px",
//   maxWidth,
//   maxHeight,
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
// }) => {
//   const {
//     connectors: { connect, drag },
//   } = useNode();
//   return (
//     <Paper
//       ref={(ref) => connect(drag(ref))}
//       style={{
//         display,
//         fontSize,
//         textAlign,
//         color,
//         float,
//         fontFamily,
//         top,
//         position,
//         bottom,
//         left,
//         right,
//         height,
//         width,
//         maxWidth,
//         minHeight,
//         marginTop,
//         marginLeft,
//         marginRight,
//         marginBottom,
//         paddingTop,
//         paddingLeft,
//         paddingRight,
//         paddingBottom,
//         fontWeight,
//         opacity,
//         borderTopLeftRadius,
//         borderTopRightRadius,
//         borderBottomRightRadius,
//         borderBottomLeftRadius,
//         letterSpacing,
//         lineHeight,
//         border,
//         flexDirection,
//         justifyContent,
//         alignItems,
//         alignSelf,
//         flexGrow,
//         flexShrink,
//         flexBasis,
//       }}
//     >
//       {children}
//     </Paper>
//   );
// };

// export const ContainerSettings = () => {
//   const {
//     actions: { setProp },
//     fontSize,
//     background,
//     color,
//     textAlign,
//     float,
//     fontFamily,
//     display,
//     position,
//     top,
//     right,
//     bottom,
//     left,
//     width,
//     height,
//     maxWidth,
//     minHeight,
//     marginTop,
//     marginLeft,
//     marginRight,
//     marginBottom,
//     paddingTop,
//     paddingLeft,
//     paddingRight,
//     paddingBottom,
//     fontWeight,
//     letterSpacing,
//     lineHeight,
//     opacity,
//     borderTopRightRadius,
//     borderTopLeftRadius,
//     borderBottomRightRadius,
//     borderBottomLeftRadius,
//     border,
//     flexDirection,
//     justifyContent,
//     alignItems,
//     alignSelf,
//     flexGrow,
//     flexShrink,
//     flexBasis,
//   } = useNode((node) => ({
//     background: node.data.props.background,
//     padding: node.data.props.padding,
//   }));

//   return (
//     <>
//       <FormControl fullWidth={true} margin="normal" component="fieldset">
//         <General setProp={setProp} color={color} />
//         <Dimension setProp={setProp} />
//         <Typography setProp={setProp} />
//         <Decorations setProp={setProp} />
//         <Flex setProp={setProp} />
//       </FormControl>
//     </>
//   );
// };

// export const ContainerDefaultProps = {
//   background: "#ffffff",
//   padding: 3,
// };

// Container.craft = {
//   related: {
//     settings: ContainerSettings,
//   },
// };
