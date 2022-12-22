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
  letterSpacing,
  lineHeight
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
        }}
      />
      {/* {hasSelectedNode && (
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
      )} */}
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
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));
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

  const [margintopcssvalue, setmargintopcssvalue] = useState(0);
  const [margintopcssunits, setmargintopcssunits] = useState(`px`);

  const [marginbottomcssvalue, setmarginbottomcssvalue] = useState(0);
  const [marginbottomcssunits, setmarginbottomcssunits] = useState(`px`);

  const [marginleftcssvalue, setmarginleftcssvalue] = useState(0);
  const [marginleftcssunits, setmarginleftcssunits] = useState(`px`);

  const [marginrightcssvalue, setmarginrightcssvalue] = useState(0);
  const [marginrightcssunits, setmarginrightcssunits] = useState(`px`);

  const [paddingtopcssvalue, setpaddingtopcssvalue] = useState(0);
  const [paddingtopcssunits, setpaddingtopcssunits] = useState(`px`);

  const [paddingbottomcssvalue, setpaddingbottomcssvalue] = useState(0);
  const [paddingbottomcssunits, setpaddingbottomcssunits] = useState(`px`);

  const [paddingleftcssvalue, setpaddingleftcssvalue] = useState(0);
  const [paddingleftcssunits, setpaddingleftcssunits] = useState(`px`);

  const [paddingrightcssvalue, setpaddingrightcssvalue] = useState(0);
  const [paddingrightcssunits, setpaddingrightcssunits] = useState(`px`);

  const [fontsizecssvalue, setfontsizecssvalue] = useState(0);
  const [fontsizecssunits, setfontsizecssunits] = useState(`px`);

  const [letterSpacingcssvalue, setletterSpacingcssvalue] = useState(0);
  const [letterSpacingcssunits, setletterSpacingcssunits] = useState(`px`);

  const [lineheightcssvalue, setlineheightcssvalue] = useState(0);
  const [lineheightcssunits, setlineheightcssunits] = useState(`px`);

  return (
    <>
      <FormControl size="small" component="fieldset">
        <h1>General</h1>
        
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
              value={minheightcssunits}
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
        <h2>Margin</h2>
        <FormControl>

          <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Margin Top</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={margintopcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setmargintopcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${margintopcssvalue}${margintopcssunits}`);
                    return (props.marginTop = `${e.target.value}${margintopcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                value={margintopcssunits}
                onChange={(event) => {
                  setmargintopcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.top = `${margintopcssvalue}${event.target.value}`);
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
            <label htmlFor="Top">Margin Bottom</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={marginbottomcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setmarginbottomcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${marginbottomcssvalue}${marginbottomcssunits}`);
                    return (props.marginBottom = `${e.target.value}${marginbottomcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                value={marginbottomcssunits}
                onChange={(event) => {
                  setmarginbottomcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.marginBottom = `${marginbottomcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">Margin Left</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={marginleftcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setmarginleftcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${marginleftcssvalue}${leftcssunits}`);
                  return (props.marginLeft = `${e.target.value}${marginleftcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={marginleftcssunits}
              onChange={(event) => {
                setmarginleftcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.marginLeft = `${marginleftcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">Margin right</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={marginrightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setmarginrightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${marginrightcssvalue}${marginrightcssunits}`);
                  return (props.marginRight = `${e.target.value}${marginrightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={marginrightcssunits}
              onChange={(event) => {
                setmarginrightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.marginRight = `${marginrightcssvalue}${event.target.value}`);
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
        </FormControl>
        <h2>Padding</h2>
        <FormControl>

          <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Padding Top</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={paddingtopcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setpaddingtopcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${paddingtopcssvalue}${paddingtopcssunits}`);
                    return (props.paddingTop = `${e.target.value}${paddingtopcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                value={paddingtopcssunits}
                onChange={(event) => {
                  setpaddingtopcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.paddingTop = `${paddingtopcssvalue}${event.target.value}`);
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
            <label htmlFor="Top">Padding Bottom</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={paddingbottomcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setpaddingbottomcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${paddingbottomcssvalue}${paddingbottomcssunits}`);
                    return (props.paddingBottom = `${e.target.value}${paddingbottomcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                value={paddingbottomcssunits}
                onChange={(event) => {
                  setpaddingbottomcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.paddingBottom = `${paddingbottomcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">Padding Left</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={paddingleftcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setpaddingleftcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${paddingleftcssvalue}${paddingleftcssunits}`);
                  return (props.paddingLeft = `${e.target.value}${paddingleftcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={paddingleftcssunits}
              onChange={(event) => {
                setpaddingleftcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.paddingLeft = `${paddingleftcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">padding right</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={paddingrightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setpaddingrightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${paddingrightcssvalue}${paddingrightcssunits}`);
                  return (props.paddingRight = `${e.target.value}${paddingrightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={paddingrightcssunits}
              onChange={(event) => {
                setpaddingrightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.paddingRight = `${paddingrightcssvalue}${event.target.value}`);
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
        </FormControl>
        <h1>Typography</h1>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Font Family</label>
            <div style={{ display: "flex" }}>
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
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Font Size</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={fontsizecssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setfontsizecssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${fontsizecssvalue}${fontsizecssunits}`);
                  return (props.fontSize = `${e.target.value}${fontsizecssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={fontsizecssunits}
              onChange={(event) => {
                setfontsizecssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.fontSize = `${fontsizecssvalue}${event.target.value}`);
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
        <FormControl>
          
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Font Weight</label>
            <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              value={fontFamily}
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.fontWeight = event.target.value));
              }}
            >
              <option value={100}>
                Thin
              </option>
              <option value={200}>
                Extra Light
              </option>
              <option value={300}>
              Light
              </option>
              <option value={400}>
                Normal
              </option>
              <option value={500}>Medium</option>
              <option value={600}>Semi Bold</option>
              <option value={700}>Bold</option>
              <option value={800}>
                Extra Bold
              </option>
              <option value={900}>
                Ultra Bold
              </option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Letter Spacing</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={letterSpacingcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setletterSpacingcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${letterSpacingcssvalue}${letterSpacingcssunits}`);
                  return (props.letterSpacing = `${e.target.value}${letterSpacingcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={letterSpacingcssunits}
              onChange={(event) => {
                setletterSpacingcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.letterSpacing = `${letterSpacingcssvalue}${event.target.value}`);
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
        </FormControl>
        <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Text Align</label>
            <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              value={textAlign}
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.textAlign = event.target.value));
              }}
            >
              <option value={'left'}>
                Left
              </option>
              <option value={'right'}>
              Right
              </option>
              <option value={'center'}>
              Center
              </option>
              <option value={'justify'}>
                Justify
              </option>
              
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Line Height</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={lineheightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setlineheightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${lineheightcssvalue}${lineheightcssunits}`);
                  return (props.lineHeight = `${e.target.value}${lineheightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              value={letterSpacingcssunits}
              onChange={(event) => {
                setlineheightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.lineHeight = `${lineheightcssvalue}${event.target.value}`);
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
        </FormControl>
       {/*  */}
        



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
