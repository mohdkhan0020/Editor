import React, { useState } from "react";
import { FormControl, Slider } from "@mui/material";
import { memo } from "react";
import options from "../User/Data";

import SelectTag from '../Input/SelectTag';
import InputTag from '../Input/InputTag';
import SelectTagUnits from '../Input/SelectTagUnits';
const Decorations = ({ setprop }) => {
  const [borderwidthcssvalue, setborderwidthcssvalue] = useState('');
  const [borderwidthcssunits, setborderwidthcssunits] = useState(`px`);

  const [borderradiusbottomleftcssvalue, setborderradiusbottomleftcssvalue] =
    useState('');
  const [borderradiusbottomleftcssunits, setborderradiusbottomleftcssunits] =
    useState(`px`);

  const [borderradiusbottomrightcssvalue, setborderradiusbottomrightcssvalue] =
    useState('');
  const [borderradiusbottomrightcssunits, setborderradiusbottomrightcssunits] =
    useState(`px`);

  const [borderradiustopleftcssvalue, setborderradiustopleftcssvalue] =
    useState('');
  const [borderradiustopleftcssunits, setborderradiustopleftcssunits] =
    useState(`px`);

  const [borderradiustoprightcssvalue, setborderradiustoprightcssvalue] =
    useState('');
  const [borderradiustoprightcssunits, setborderradiustoprightcssunits] =
    useState(`px`);
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
            return setprop((props) => {
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
            <InputTag
              id={"BorderRadiusTopLeft"}
              value={borderradiustopleftcssvalue}
              setcssvalue={setborderradiustopleftcssvalue}
              setcssunits={setborderradiustopleftcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"BorderRadiusTopLeft"}
              units={setborderradiustopleftcssunits}
              setcssvalue={setborderradiustopleftcssvalue}
              setProp={setprop}
              value={borderradiustopleftcssvalue}
              defaultvalue={borderradiustopleftcssunits}
            />
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Top Right </label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"BorderRadiusTopRight"}
              value={borderradiustoprightcssvalue}
              setcssvalue={setborderradiustoprightcssvalue}
              setcssunits={setborderradiustoprightcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"BorderRadiusTopRight"}
              units={setborderradiustoprightcssunits}
              setcssvalue={setborderradiustoprightcssvalue}
              setProp={setprop}
              value={borderradiustoprightcssvalue}
              defaultvalue={borderradiustoprightcssunits}
            />
            </div>
          </FormControl>
        </div>
      </FormControl>
      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top"> Bottom Left</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"BorderRadiusBottomLeft"}
              value={borderradiusbottomleftcssvalue}
              setcssvalue={setborderradiusbottomleftcssvalue}
              setcssunits={setborderradiusbottomleftcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"BorderRadiusBottomLeft"}
              units={setborderradiusbottomleftcssunits}
              setcssvalue={setborderradiusbottomleftcssvalue}
              setProp={setprop}
              value={borderradiusbottomleftcssvalue}
              defaultvalue={borderradiusbottomleftcssunits}
            />
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Bottom Right </label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"BorderRadiusBottomRight"}
              value={borderradiusbottomrightcssvalue}
              setcssvalue={setborderradiusbottomrightcssvalue}
              setcssunits={setborderradiusbottomrightcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"BorderRadiusBottomRight"}
              units={setborderradiusbottomrightcssunits}
              setcssvalue={setborderradiusbottomrightcssvalue}
              setProp={setprop}
              value={borderradiusbottomrightcssvalue}
              defaultvalue={borderradiusbottomrightcssunits}
            />
            </div>
          </FormControl>
        </div>
      </FormControl>
      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Style">Style</label>
            <div style={{ display: "flex" }}>
              <SelectTag id={"BorderStyle"} setprop={setprop}/>
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Top">Border width</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"BorderWidth"}
              value={borderwidthcssvalue}
              setcssvalue={setborderwidthcssvalue}
              setcssunits={setborderwidthcssunits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"BorderWidth"}
              units={setborderwidthcssunits}
              setcssvalue={setborderwidthcssvalue}
              setProp={setprop}
              value={borderwidthcssvalue}
              defaultvalue={borderwidthcssunits}
            />
            </div>
          </FormControl>
        </div>
      </FormControl>
    </>
  );
};

export default memo(Decorations);
