import React from "react";
import { SketchPicker } from "react-color";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import {
  Slider,
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Radio,
} from "@mui/material";

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
          fontSize: `${fontSize}px`,
          textAlign,
          color,
          letterSpacing: `1px`,
          borderTopLeftRadius: "5px",
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
          minHeight
        }}
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
    color,
    textAlign,
    float,
    fontFamily,
    display,
    position,
    top,
    right,
    bottom,
    left,
    width,
    height,
    maxWidth,
    minHeight
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));
  const [age, setAge] = React.useState("");
  const [topcssvalue, settopcssvalue] = useState(0);
  const [topcssunits, settopcssunits] = useState(`px`);

  const [bottomcssvalue, setbottomcssvalue] = useState(0);
  const [bottomcssunits, setbottomcssunits] = useState(`px`);

  const [leftcssvalue, setleftcssvalue] = useState(0);
  const [leftcssunits, setleftcssunits] = useState(`px`);

  const [rightcssvalue, setrightcssvalue] = useState(0);
  const [rightcssunits, setrightcssunits] = useState(`px`);

  const [widthcssvalue, setwidthcssvalue] = useState(0);
  const [widthcssunits, setwidthcssunits] = useState(`px`);

  const [maxwidthcssvalue, setmaxwidthcssvalue] = useState(0);
  const [maxwidthcssunits, setmaxwidthcssunits] = useState(`px`);

  const [heightcssvalue, setheightcssvalue] = useState(0);
  const [heightcssunits, setheightcssunits] = useState(`px`);

  const [minheightcssvalue, setminheightcssvalue] = useState(0);
  const [minheightcssunits, setminheightcssunits] = useState(`px`);

  return (
    <>
      <FormControl size="small" component="fieldset">
        <h1>General</h1>
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
          onChangeComplete={(color) => {
            setProp((props) => (props.color = color.hex));
          }}
        />

        <FormControl>
          <label htmlFor="textalign">Float</label>
          <select
            name="float"
            id="float"
            value={float}
            onChange={(event) => {
              console.log(event.target.value);
              setProp((props) => (props.float = event.target.value));
            }}
          >
            <option value="left">left</option>
            <option value="right">right</option>
            <option value="none">none</option>
          </select>
        </FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Display</label>
            <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              value={display}
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.display = event.target.value));
              }}
            >
              <option value="inline">inline</option>
              <option value="block">block</option>
              <option value="inline-block">inline block</option>
              <option value="flex">flex</option>
              <option value="none">none</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Position">Position</label>
            <div style={{ display: "flex" }}>
            <select
              name="Position"
              id="Position"
              value={position}
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.position = event.target.value));
              }}
            >
              <option value="static">static</option>
              <option value="relative">relative</option>
              <option value="absolute">absolute</option>
              <option value="fixed">fixed</option>
            </select>
            </div>


          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Top</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={topcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  settopcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${topcssvalue}${topcssunits}`);
                    return (props.top = `${e.target.value}${topcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                value={top}
                onChange={(event) => {
                  settopcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.top = `${topcssvalue}${event.target.value}`);
                  });
                }}
              >
                <option value="px">px</option>
                <option value="%">%</option>
                <option value="vh">vh</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
                <option value="vw">vw</option>
              </select>
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Top">Bottom</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={bottomcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setbottomcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${bottomcssvalue}${bottomcssunits}`);
                    return (props.bottom = `${e.target.value}${bottomcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                value={bottom}
                onChange={(event) => {
                  setbottomcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.bottom = `${bottomcssvalue}${event.target.value}`);
                  });
                }}
              >
                <option value="px">px</option>
                <option value="%">%</option>
                <option value="vh">vh</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
                <option value="vw">vw</option>
              </select>
            </div>


          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Top">Left</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={leftcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setleftcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${leftcssvalue}${leftcssunits}`);
                  return (props.left = `${e.target.value}${leftcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={left}
              onChange={(event) => {
                setleftcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.left = `${leftcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">right</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={rightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setrightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${rightcssvalue}${rightcssunits}`);
                  return (props.right = `${e.target.value}${rightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={right}
              onChange={(event) => {
                setrightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.right = `${rightcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
            </div>

            
          </FormControl>
        </div>

        <h1>Dimension</h1>
        {/*  */}
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Width">Width</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={widthcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setwidthcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${widthcssvalue}${widthcssunits}`);
                  return (props.width = `${e.target.value}${widthcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={width}
              onChange={(event) => {
                setwidthcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.width = `${widthcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">height</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={heightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setheightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${heightcssvalue}${heightcssunits}`);
                  return (props.height = `${e.target.value}${heightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={height}
              onChange={(event) => {
                setheightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.height = `${heightcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
            </div>

            
          </FormControl>
        </div>
        
       
        {/*  */}

        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Width">Max Width</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={maxwidthcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setmaxwidthcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${maxwidthcssvalue}${maxwidthcssunits}`);
                  return (props.maxWidth = `${e.target.value}${maxwidthcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={maxwidthcssvalue}
              onChange={(event) => {
                setmaxwidthcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.maxWidth = `${maxwidthcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Min Height</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={minheightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setminheightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${minheightcssvalue}${minheightcssunits}`);
                  return (props.minHeight = `${e.target.value}${minheightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={height}
              onChange={(event) => {
                setminheightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.minHeight = `${minheightcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
            </div>

            
          </FormControl>
        </div>
        





        <FormControl>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor="textalign">textalign</label>
            <select
              name="textalign"
              id="textalign"
              value={textAlign}
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.textAlign = event.target.value));
              }}
            >
              <option value="center">center</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="justify">justify</option>
            </select>

            <label htmlFor="textalign">Font Family</label>

            <select
              name="textalign"
              id="textalign"
              value={fontFamily}
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.fontFamily = event.target.value));
              }}
            >
              <option value="Arial, Helvetica, sans-serif">Arial</option>
              <option value="Arial Black, Gadget, sans-serif">
                Arial Black
              </option>
              <option value="Brush Script MT, sans-serif">
                Brush Script MT
              </option>
              <option value="Comic Sans MS, cursive, sans-serif">
                Comic Sans MS
              </option>
              <option value="Courier New, Courier, monospace">
                Courier New
              </option>
              <option value="Georgia, serif">Georgia</option>
              <option value="Helvetica, sans-serif">Helvetica</option>
              <option value="Charcoal, sans-serif">Impact</option>
              <option value="Lucida Sans Unicode, Lucida Grande, sans-serif">
                Lucida Sans Unicode
              </option>
              <option value="Tahoma, Geneva, sans-serif">Tahoma</option>
              <option value="Times New Roman, Times, serif">
                Times New Roman
              </option>
              <option value="Trebuchet MS, Helvetica, sans-serif">
                Trebuchet MS
              </option>
              <option value="Verdana, Geneva, sans-serif">Verdana</option>
            </select>

            {/* <label htmlFor="textalign">Float</label>
  <select name="float" id="float"
  value={float}
  onChange={(event) => {
    console.log(event.target.value);
    setProp((props) => (props.float = event.target.value));
    
  }}
  >
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="none">none</option>
  </select> */}
          </div>
        </FormControl>
        <div>
          <FormControl size="small" component="fieldset">
            <FormLabel component="legend">Color</FormLabel>
            <input
              type="number"
              value={topcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                settopcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${topcssvalue}${topcssunits}`);
                  return (props.top = `${e.target.value}${topcssunits}`);
                });
              }}
            ></input>
          </FormControl>
          <FormControl size="small" component="fieldset">
            <FormLabel component="legend">Color</FormLabel>
            <select
              name="Top"
              id="Top"
              value={top}
              onChange={(event) => {
                settopcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.top = `${topcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
          </FormControl>
        </div>
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
