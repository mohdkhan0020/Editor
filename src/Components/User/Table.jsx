import React from "react";
import { memo } from "react";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { FormControl } from "@mui/material";
import General from "../Settings/General";
import Decorations from "../Settings/Decorations";
import Dimension from "../Settings/Dimension";
import Typography from "../Settings/Typography";
import Flex from "../Settings/Flex";
// import { SketchPicker } from "react-color";
// import Dimension from "../Settings/Dimension";
// import Decorations from "../Settings/Decorations";

export const Table = ({
  text,
  children,
  fontSize,
  textAlign,
  background,
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

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    // debugger;
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    setToggle(!toggle);
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    // debugger;
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        display,
        fontSize,
        textAlign,
        color,
        float,
        background,
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
    >
      <table
        style={{
          border: "2px solid forestgreen",
          width: "400px",
          height: "100px",
        }}
      >
        <tr style={{ borderBottom: "1px solid black" }}>
          onClick={(e) => setEditable(true)}
          <th onClick={(e) => setEditable(true)}>
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
                background,
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
            />
          </th>
          <th>
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
                background,
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
            />
          </th>
          <th>
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
              // style={{
              //   display,
              //   fontSize,
              //   textAlign,
              //   color,
              //   float,
              //   background,
              //   fontFamily,
              //   top,
              //   position,
              //   bottom,
              //   left,
              //   right,
              //   height,
              //   width,
              //   maxWidth,
              //   minHeight,
              //   marginTop,
              //   marginLeft,
              //   marginRight,
              //   marginBottom,
              //   paddingTop,
              //   paddingLeft,
              //   paddingRight,
              //   paddingBottom,
              //   fontWeight,
              //   letterSpacing,
              //   lineHeight,
              //   opacity,
              //   borderTopLeftRadius,
              //   borderTopRightRadius,
              //   borderBottomRightRadius,
              //   borderBottomLeftRadius,
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
              // }}
            />
          </th>
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};
memo(Table);

const TableSettings = () => {
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
// memo(TextSettings);

Table.craft = {
  props: {
    text: "First",
    fontSize: 20,
  },
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: TableSettings,
  },
};

// import React from "react";
// // import { Container } from "reactstrap";
// import { Container } from "./Container";
// import { Element } from "@craftjs/core";

// const Table = () => {
//   const data = [
//     { name: "Anom", age: 19, gender: "Male" },
//     { name: "Megha", age: 19, gender: "Female" },
//     { name: "Subham", age: 25, gender: "Male" },
//   ];

//   return (
//     <>
//       <div>
//         <Element is={Container} id={Table} canvas>
//           <div
//             className="Apps"
//             style={{
//               width: "100%",
//               // height: "100vh",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
// <table
//   style={{
//     border: "2px solid forestgreen",
//     width: "400px",
//     height: "100px",
//   }}
// >
//   <tr style={{ borderBottom: "1px solid black" }}>
//     <th>Name</th>
//     <th>Age</th>
//     <th>Gender</th>
//   </tr>
//   {data.map((val, key) => {
//     return (
//       <tr key={key} style={{ textAlign: "center" }}>
//         <td>{Text}</td>
//         <td>{Text}</td>
//         <td>{Text}</td>
//       </tr>
//     );
//   })}
// </table>
//           </div>
//         </Element>
//       </div>
//     </>
//   );
// };

// export default Table;
