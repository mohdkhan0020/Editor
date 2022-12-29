import React, { useState } from "react";
import { FormControl, Slider } from "@mui/material";
import { memo } from "react";
import options from "../User/Data";
const Decorations = ({ setProp }) => {
  const [borderwidthcssvalue, setborderwidthcssvalue] = useState(0);
  const [borderwidthcssunits, setborderwidthcssunits] = useState(`px`);

  const [borderradiusbottomleftcssvalue, setborderradiusbottomleftcssvalue] =
    useState(0);
  const [borderradiusbottomleftcssunits, setborderradiusbottomleftcssunits] =
    useState(`px`);

  const [borderradiusbottomrightcssvalue, setborderradiusbottomrightcssvalue] =
    useState(0);
  const [borderradiusbottomrightcssunits, setborderradiusbottomrightcssunits] =
    useState(`px`);

  const [borderradiustopleftcssvalue, setborderradiustopleftcssvalue] =
    useState(0);
  const [borderradiustopleftcssunits, setborderradiustopleftcssunits] =
    useState(`px`);

  const [borderradiustoprightcssvalue, setborderradiustoprightcssvalue] =
    useState(0);
  const [borderradiustoprightcssunits, setborderradiustoprightcssunits] =
    useState(`px`);

  const [borderstyle, setborderstyle] = useState(``);

  // const search = (e) => {
  //   if (e.key === "Enter") {
  //     // debugger;
  //     let str = document.getElementById(e.target.id).value;
  //     var cssvalue = str.replace(/\D/g, "");
  //     var cssunits = str.replace(/[^a-z]/gi, "");
  //     console.log("units " + cssunits);
  //     console.log("value " + cssvalue);
  //     if (isNaN(cssunits)) {
  //       let str = "";
  //       str = str + cssunits;
  //       let units = ["px", "%", "vh", "em", "rem", "vw"];
  //       if (units.includes(str)) {
  //         // debugger;
  //         switch (e.target.id) {
  //           case "topvalue":
  //             setborderwidthcssvalue(cssvalue);
  //             setborderwidthcssunits(str);
  //             document.getElementById("topleft").value = cssvalue;
  //             setProp((props) => {
  //               return (props.borderTopLeftRadius = `${cssvalue}${cssunits}`);
  //             });
  //             break;
  //           case "bottomvalue":
  //             setbottomcssvalue(cssvalue);
  //             setbottomcssunits(str);
  //             document.getElementById("bottomvalue").value = cssvalue;
  //             setProp((props) => {
  //               return (props.bottom = `${cssvalue}${cssunits}`);
  //             });
  //             break;
  //           case "leftvalue":
  //             setleftcssvalue(cssvalue);
  //             setleftcssunits(str);
  //             document.getElementById("leftvalue").value = cssvalue;
  //             setProp((props) => {
  //               return (props.left = `${cssvalue}${cssunits}`);
  //             });
  //             break;

  //           case "rightvalue":
  //             setrightcssvalue(cssvalue);
  //             setrightcssunits(str);
  //             document.getElementById("rightvalue").value = cssvalue;
  //             setProp((props) => {
  //               return (props.right = `${cssvalue}${cssunits}`);
  //             });
  //             break;

  //           default:
  //             return 1;
  //         }
  //       }
  //     }
  //   }
  // };

  return (
    <>
      <h1>Decorations</h1>
      <FormControl>
        <label>Opacity</label>
        <Slider
          defaultValue={0}
          min={0}
          max={1}
          step={0.1}
          valueLabelDisplay="auto"
          onChange={(e) => {
            return setProp((props) => {
              return (props.opacity = e.target.value);
            });
          }}
        />
      </FormControl>
      <h2>Border Radius</h2>
      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top"> Top Left</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={borderradiustopleftcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setborderradiustopleftcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(
                      `${borderradiustopleftcssvalue}${borderradiustopleftcssunits}`
                    );
                    return (props.borderTopLeftRadius = `${e.target.value}${borderradiustopleftcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setborderradiustopleftcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.borderTopLeftRadius = `${borderradiustopleftcssvalue}${event.target.value}`);
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
            <label htmlFor="Top">Top Right </label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={borderradiustoprightcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setborderradiustoprightcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(
                      `${borderradiustoprightcssvalue}${borderradiustoprightcssunits}`
                    );
                    return (props.borderTopRightRadius = `${e.target.value}${borderradiustoprightcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setborderradiustoprightcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.borderTopRightRadius = `${borderradiustoprightcssvalue}${event.target.value}`);
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
      </FormControl>
      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top"> Bottom Left</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={borderradiusbottomleftcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setborderradiusbottomleftcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(
                      `${borderradiusbottomleftcssvalue}${borderradiusbottomleftcssunits}`
                    );
                    return (props.borderBottomLeftRadius = `${e.target.value}${borderradiusbottomleftcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setborderradiusbottomleftcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.borderBottomRightRadius = `${borderradiusbottomleftcssvalue}${event.target.value}`);
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
            <label htmlFor="Top">Bottom Right </label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={borderradiusbottomrightcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setborderradiusbottomrightcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(
                      `${borderradiusbottomrightcssvalue}${borderradiusbottomrightcssunits}`
                    );
                    return (props.borderBottomRightRadius = `${e.target.value}${borderradiusbottomrightcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setborderradiusbottomrightcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.borderBottomRightRadius = `${borderradiusbottomrightcssvalue}${event.target.value}`);
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
      </FormControl>
      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Style">Style</label>
            <div style={{ display: "flex" }}>
              <select
                name="Style"
                id="Style"
                onChange={(event) => {
                  console.log(event.target.value);
                  setborderstyle(event.target.value);
                  setProp(
                    (props) =>
                      (props.border = `${event.target.value} ${borderwidthcssvalue}${borderwidthcssunits}`)
                  );
                }}
              >
                {options.border.map((item, id) => {
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
            <label htmlFor="Top">Border width</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setborderwidthcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${borderwidthcssvalue}${borderwidthcssunits}`);
                    return (props.border = `${borderstyle} ${e.target.value}${borderwidthcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setborderwidthcssunits(`${event.target.value}`);
                  console.log(
                    `${borderstyle} ${borderwidthcssvalue}${event.target.value}`
                  );
                  setProp((props) => {
                    return (props.border = `${borderstyle} ${borderwidthcssvalue}${event.target.value}`);
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
      </FormControl>
    </>
  );
};

export default memo(Decorations);
