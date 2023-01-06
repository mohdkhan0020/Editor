// components/user/Card.js
import React from "react";
import { ContainerDefaultProps } from "./Container";
import { ContainerSettings } from "./Container";
import { FormControl } from "@mui/material";
import General from "../Settings/General";
import Decorations from "../Settings/Decorations";
import Dimension from "../Settings/Dimension";
import Typography from "../Settings/Typography";
import Flex from "../Settings/Flex";
import { Text } from "./Text";
import { Button } from "./Button";
import { Element, useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@mui/material";
import { Paper } from "@mui/material";
import { Container } from "./Container";
import { memo } from "react";

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNode) =>
      incomingNode.every((incomingNode) => incomingNode.data.type === Button),
  },
};

export const Card = ({
  text,
  background,
  padding,
  children,
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
  return (
    <Paper background={background} padding={padding} text="">
      <Element id="text" is={CardTop} canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        <Button
          size="small"
          text="Learn more"
          variant="contained"
          color="primary"
        >
          Button
        </Button>
      </Element>
    </Paper>
  );
};

const CardSettings = () => {
  const {
    actions: { setProp },
    color,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

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
memo(CardSettings);

Card.craft = {
  props: {
    text: "Hi",
    fontSize: 60,
  },
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: CardSettings,
  },
};

// const CardSettings = () => {
//   const {
//     actions: { setProp },
//     color,
//   } = useNode((node) => ({
//     fontSize: node.data.props.fontSize,
//   }));

//   return (
//     <>
//       <FormControl size="small" component="fieldset">
//         <General setprop={setProp} color={color} />
//         <Dimension setprop={setProp} color={color} />
//         <Typography setprop={setProp} />
//         <Decorations setprop={setProp} color={color} />
//         <Flex setprop={setProp} />
//       </FormControl>
//     </>
//   );
// };

// Card.craft = {
//   props: {
//     ContainerDefaultProps,
//     text: "",
//     fontSize: 20,
//   },
//   related: {
//     // Since Card has the same settings as Container, we'll just reuse ContainerSettings
//     settings: CardSettings,
//   },
// };
