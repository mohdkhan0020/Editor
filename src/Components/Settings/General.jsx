import React, { useState } from "react";
import { SketchPicker } from "react-color";
import options from "../User/Data";
import { memo } from "react";

import { FormControl } from "@mui/material";

const General = ({ setProp, color }) => {
  const [topcssvalue, settopcssvalue] = useState(0);
  const [topcssunits, settopcssunits] = useState(`px`);

  const [bottomcssvalue, setbottomcssvalue] = useState(0);
  const [bottomcssunits, setbottomcssunits] = useState(`px`);

  const [leftcssvalue, setleftcssvalue] = useState(0);
  const [leftcssunits, setleftcssunits] = useState(`px`);

  const [rightcssvalue, setrightcssvalue] = useState(0);
  const [rightcssunits, setrightcssunits] = useState(`px`);

  // const dynamictopvalue =

  const search = (e) => {
    if (e.key === "Enter") {
      // debugger;
      let str = document.getElementById(e.target.id).value;
      var cssvalue = str.replace(/\D/g, "");
      var cssunits = str.replace(/[^a-z]/gi, "");
      console.log("units " + cssunits);
      if (isNaN(cssunits)) {
        let str = "";
        str = str + cssunits;
        if (options.top.includes(str)) {
          switch (e.target.id) {
            case "topvalue":
              settopcssvalue(cssvalue);
              settopcssunits(str);
              // debugger;

              document.getElementById("topvalue").value = cssvalue;
              setProp((props) => {
                return (props.top = `${cssvalue}${cssunits}`);
              });
              break;
            case "bottomvalue":
              setbottomcssvalue(cssvalue);
              setbottomcssunits(str);
              document.getElementById("bottomvalue").value = cssvalue;
              setProp((props) => {
                return (props.bottom = `${cssvalue}${cssunits}`);
              });
              break;
            case "leftvalue":
              setleftcssvalue(cssvalue);
              setleftcssunits(str);
              document.getElementById("leftvalue").value = cssvalue;
              setProp((props) => {
                return (props.left = `${cssvalue}${cssunits}`);
              });
              break;

            case "rightvalue":
              setrightcssvalue(cssvalue);
              setrightcssunits(str);
              document.getElementById("rightvalue").value = cssvalue;
              setProp((props) => {
                return (props.right = `${cssvalue}${cssunits}`);
              });
              break;

            default:
              return 1;
          }
        }
      }
    }
  };

  return (
    <div>
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
          onChange={(event) => {
            console.log(event.target.value);
            setProp((props) => (props.float = event.target.value));
          }}
        >
          {/* <option>-</option> */}
          {options.float.map((item, id) => {
            return (
              <option key={id} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </FormControl>
      <div style={{ display: "flex" }}>
        <FormControl>
          <label htmlFor="textalign">Display</label>
          <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.display = event.target.value));
              }}
            >
              {options.display.map((item, id) => {
                return (
                  <option key={id} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Position">Position</label>
          <div style={{ display: "flex" }}>
            <select
              name="Position"
              id="Position"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.position = event.target.value));
              }}
            >
              {options.position.map((item, id) => {
                return (
                  <option key={id} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </FormControl>
      </div>

      <div>
        <FormControl>
          <label htmlFor="Top">Top</label>
          <div>
            <input
              type="text"
              id="topvalue"
              name="quantity"
              onKeyDown={search}
            ></input>

            <select
              name="Top"
              id="Top"
              value={topcssunits}
              onChange={(event) => {
                // debugger;
                settopcssunits(`${event.target.value}`);
                document.getElementById("topvalue").value = `${topcssvalue}`;
                setProp((props) => {
                  return (props.top = `${topcssvalue}${event.target.value}`);
                });
              }}
            >
              {options.top.map((item, id) => {
                return (
                  <option key={id} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Top">Bottom</label>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              id="bottomvalue"
              name="bottomvalue"
              onKeyDown={search}
            ></input>

            <select
              name="Bottom"
              id="Bottom"
              value={bottomcssunits}
              onChange={(event) => {
                // debugger;
                setbottomcssunits(`${event.target.value}`);
                document.getElementById(
                  "bottomvalue"
                ).value = `${bottomcssvalue}`;
                setProp((props) => {
                  return (props.bottom = `${bottomcssvalue}${event.target.value}`);
                });
              }}
            >
              {options.top.map((item, id) => {
                return (
                  <option key={id} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </FormControl>
      </div>

      <div>
        <FormControl>
          <label htmlFor="Top">Left</label>
          <div>
            <input
              type="text"
              id="leftvalue"
              name="leftvalue"
              onKeyDown={search}
            ></input>

            <select
              name="Left"
              id="Left"
              value={leftcssunits}
              onChange={(event) => {
                // debugger;
                setleftcssunits(`${event.target.value}`);
                document.getElementById("leftvalue").value = `${leftcssvalue}`;
                setProp((props) => {
                  return (props.left = `${leftcssvalue}${event.target.value}`);
                });
              }}
            >
              {options.top.map((item, id) => {
                return (
                  <option key={id} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Top">right</label>
          <div style={{}}>
            <input
              type="text"
              id="rightvalue"
              name="rightvalue"
              onKeyDown={search}
            ></input>

            <select
              name="Right"
              id="Right"
              value={rightcssunits}
              onChange={(event) => {
                // debugger;
                setrightcssunits(`${event.target.value}`);
                document.getElementById(
                  "rightvalue"
                ).value = `${rightcssvalue}`;
                setProp((props) => {
                  return (props.right = `${rightcssvalue}${event.target.value}`);
                });
              }}
            >
              {options.top.map((item, id) => {
                return (
                  <option key={id} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default memo(General);
