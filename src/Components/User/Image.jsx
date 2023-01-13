import React from "react";
import { memo } from "react";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { FormControl } from "@mui/material";
import General from "../Settings/General";
import Decorations from "../Settings/Decorations";
import Dimension from "../Settings/Dimension";
import { Rnd } from "react-rnd";
// import Typography from "../Settings/Typography";
// import Flex from "../Settings/Flex";
import Resizer from "react-image-file-resizer";
// import { SketchPicker } from "react-color";
// import Dimension from "../Settings/Dimension";
// import Decorations from "../Settings/Decorations";

export const Image = ({
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
  const [imageResize, setimageResize] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [toggle, setToggle] = useState(true);
  const [preview, setPreview] = useState({
    width: 200,
    height: 200,
    x: 10,
    y: 10,
  });

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
    if (!selectedFile) {
      setimageResize(undefined);
      return;
    }
    if (toggle) {
      setToggle(!toggle);
    }
    // debugger;

    const objectUrl = URL.createObjectURL(selectedFile);
    setimageResize(objectUrl);
    <em></em>;
    // free memory when ever this component is unmounted
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [hasSelectedNode, selectedFile, toggle]);

  // useEffect(() => {
  //   // debugger;

  // }, []);

  const onSelectFile = (e) => {
    // debugger;
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          e.target.files[0],
          500,
          200,
          "JPEG",
          100,
          0,
          (uri) => {
            setimageResize(uri);
          },
          "base64",
          100,
          100
        );
        console.log("size = ", e.target.files[0].size);
      } catch (err) {
        console.log(err);
      }
    }

    // debugger;
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const style1 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    fontSize,
    textAlign,
    float,
    fontFamily,
    top,
    position:"relative",
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
    flexDirection,
    alignSelf,
    flexGrow,
    flexShrink,
    flexBasis,
    borderStyle,
    borderWidth,
  };

  // const style = {
  //   fontSize,
  //   textAlign,
  //   float,
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
  //   flexDirection,
  //   alignSelf,
  //   flexGrow,
  //   flexShrink,
  //   flexBasis,
  //   borderStyle,
  //   borderWidth,
  // };

  return (
    <div>
      {toggle && (
        <input
          type="file"
          onChange={onSelectFile}
          id="file"
          className="absolute w-full h-full"
        />
      )}

      <Rnd
        style={style1}
        onDragStop={(e, d) => {
          setPreview({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setPreview({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          });
        }}
      >
        <img
          // style={style}
          ref={(ref) => connect(drag(ref))}
          size={{ width: preview.width, height: preview.height }}
          position={{ x: preview.x, y: preview.y }}
          src={imageResize}
          alt=""
          className="img-fluid"
        />
      </Rnd>
    </div>
  );
};
memo(Image);

const ImageSettings = () => {
  const {
    actions: { setProp },
    color,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <General setprop={setProp} />
        <Dimension setprop={setProp} color={color} />
        <Decorations setprop={setProp} color={color} />
      </FormControl>
    </>
  );
};
memo(ImageSettings);

Image.craft = {
  props: {
    text: "Hi Adil",
    fontSize: 20,
  },
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: ImageSettings,
  },
};
