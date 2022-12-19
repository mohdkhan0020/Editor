// components/user/Card.js
import React from "react";
import { ContainerDefaultProps } from "./Container";
import { ContainerSettings } from "./Container";
import { Text } from "./Text";
import { Button } from "./Button";
import { Element, useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@mui/material";

import { Container } from "./Container";

// // Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.

// export const CardTop = ({ children }) => {
//   const {
//     connectors: { connect },
//   } = useNode();
//   return (
//     <div ref={connect} className="text-only">
//       {children}
//     </div>
//   );
// };

// CardTop.craft = {
//   rules: {
//     // Only accept Text
//     canMoveIn: (incomingNodes) =>
//       incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
//   },
// };

// export const CardBottom = ({ children }) => {
//   const {
//     connectors: { connect },
//   } = useNode();
//   return <div ref={connect}>{children}</div>;
// };

// CardBottom.craft = {
//   rules: {
//     // canMoveIn(incomingNode: Node, currentNode: Node, helpers: NodeHelpers) => boolean

//     // Only accept Buttons
//     canMoveIn: (incomingNode) =>
//       incomingNode.every((incomingNode) => incomingNode.data.type === Button),
//   },
// };

// export const Card = ({ background, padding }) => {
//   return (
//     <Container background={background} padding={padding}>
//       <Element id="text" is={CardTop} canvas>
//         <Text
//           text={`<br /><br />Paste Dragale Item in this Container<br /><br />`}
//           fontSize={20}
//         />
//         <Text text="Subtitle" fontSize={15} />
//       </Element>
//       <Element id="buttons" is={CardBottom} canvas>
//         <Button size="small" text="Learn more">
//           {/* <MaterialButton /> */}
//           Dragable Button
//         </Button>
//       </Element>
//     </Container>
//   );
// };
// Card.craft = {
//   props: ContainerDefaultProps,
//   related: {
//     // Since Card has the same settings as Container, we'll just reuse ContainerSettings
//     settings: ContainerSettings,
//   },
// };

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

export const Card = ({ background, padding }) => {
  return (
    <Container background={background} padding={padding}>
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
        />
      </Element>
    </Container>
  );
};

Card.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
