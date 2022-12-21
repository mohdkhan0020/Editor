import React from "react";
import { SketchPicker } from "react-color";
import { useEffect, useState} from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { Slider, FormControl, FormLabel } from "@mui/material";
import props from '../Properties/properties'
export const Text = ({ text, fontSize, textAlign,color,fontFamily,position,width,height,maxWidth,maxHeight,fontWeight,borderTopLeftRadius,borderTopRightRadius,borderBottomRightRadius,borderBottomLeftRadius,opacity,display,top,right,left,bottom,float,marginTop,marginLeft,marginRight,marginBottom,paddingTop,paddingLeft,paddingRight,paddingBottom,textDecoration,textShadow }) => {
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
    console.log(JSON.parse(Object.keys(props)));
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
        style={{ fontSize: `${fontSize}px`, textAlign ,color,letterSpacing:`1px`,borderTopLeftRadius:'5px'}}
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
    fontSize,color
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
        <SketchPicker
        color={color || "#000"}
        onChangeComplete={ (color) => {
          setProp((props) => (props.color = color.hex));
        } }
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
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: TextSettings,
  },
};
