import React from "react";

import { useEffect, useState, useCallback } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { Slider, FormControl, FormLabel } from "@mui/material";

// export const Text = ({ text, fontSize, textAlign }) => {
//   const {
//     connectors: { connect, drag },
//     isActive,
//     // hasSelectedNode,
//     // hasDraggedNode,

//     actions: { setProp },
//   } = useNode((node) => ({
//     isActive: node.events.selected,
//     // hasSelectedNode: state.events.selected.size > 0,
//     // hasDraggedNode: state.events.dragged.size > 0,
//   }));
//   const [editable, setEditable] = useState(false);

//   // useEffect(() => {
//   //   !hasSelectedNode && setEditable(false);
//   // }, [hasSelectedNode]);

//   return (
//     <div ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
//       <ContentEditable
//         disabled={!editable}
//         html={text}
//         onChange={(e) =>
//           setProp(
//             (props) =>
//               (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
//           )
//         }
//         tagName="p"
//         style={{ fontSize: `${fontSize}px`, textAlign }}
//       />
//       {/* {hasSelectedNode && (
//         <FormControl className="text-additional-settings" size="small">
//           <FormLabel component="legend">Font size</FormLabel>
//           <Slider
//             defaultValue={fontSize}
//             step={1}
//             min={7}
//             max={50}
//             valueLabelDisplay="auto"
//             onChange={(_, value) => {
//               setProp((props) => (props.fontSize = value));
//             }}
//           />
//         </FormControl>
//       )} */}
//       {/* <p>{text}</p> */}
//     </div>
//   );
// };

// const TextSettings = () => {
//   const {
//     actions: { setProp },
//     fontSize,
//   } = useNode((node) => ({
//     fontSize: node.data.props.fontSize,
//   }));

//   return (
//     <>
//       <FormControl size="small" component="fieldset">
//         <FormLabel component="legend">Font size</FormLabel>
//         <Slider
//           value={fontSize || 7}
//           step={7}
//           min={1}
//           max={50}
//           onChange={(_, value) => {
//             setProp((props) => (props.fontSize = value));
//           }}
//         />
//       </FormControl>
//     </>
//   );
// };

// Text.craft = {
//   props: {
//     text: "Hi",
//     fontSize: 20,
//   },
//   rules: {
//     canDrag: (node) => node.data.props.text !== "Drag",
//   },
//   related: {
//     settings: TextSettings,
//   },
// };

export const Text = ({ text, fontSize, textAlign }) => {
  const {
    connectors: { connect, drag },
    isActive,
    hasSelectedNode,
    hasDraggedNode,
    actions: { setProp },
  } = useNode((state, node) => ({
    isActive: node.events.selected,
    hasSelectedNode: state.events.selected.size > 0,
    hasDraggedNode: state.events.dragged.size > 0,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <p style={{ fontSize }}>{text}</p>
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
        style={{ fontSize: `${fontSize}px`, textAlign }}
      />
      {hasSelectedNode && (
        <FormControl className="text-additional-settings" size="small">
          <FormLabel component="legend">Font size</FormLabel>
          <Slider
            defaultValue={fontSize}
            step={1}
            min={7}
            max={50}
            valueLabelDisplay="auto"
            onChange={(_, value) => {
              setProp((props) => (props.fontSize = value));
            }}
          />
        </FormControl>
      )}
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value));
          }}
        />
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
    canDrag: (node) => node.data.props.text != "Drag",
  },
  related: {
    settings: TextSettings,
  },
};
