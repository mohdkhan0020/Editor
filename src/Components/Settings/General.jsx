import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { memo } from "react";
import { FormControl } from "@mui/material";
import SelectTagUnits from "../Input/SelectTagUnits";
import SelectTag from "../Input/SelectTag";
import InputTag from "../Input/InputTag";

const General = ({ setprop, color }) => {
  const [topcssvalue, settopcssvalue] = useState('');
  const [topcssunits, settopcssunits] = useState('');

  const [bottomcssvalue, setbottomcssvalue] = useState('');
  const [bottomcssunits, setbottomcssunits] = useState('');

  const [leftcssvalue, setleftcssvalue] = useState('');
  const [leftcssunits, setleftcssunits] = useState('');

  const [rightcssvalue, setrightcssvalue] = useState('');
  const [rightcssunits, setrightcssunits] = useState('');
  return (
    <div>
      <h1>General</h1>

      <SketchPicker
        color={color || "#000"}
        onChangeComplete={(color) => {
          setprop((props) => (props.color = color.hex));
        }}
      />

      <FormControl>
        <label htmlFor="textalign">Float</label>
        <SelectTag id={"Float"} setprop={setprop} />
      </FormControl>
      <div style={{ display: "flex" }}>
        <FormControl>
          <label htmlFor="textalign">Display</label>
          <div style={{ display: "flex" }}>
            <SelectTag id={"Display"} setprop={setprop} />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Position">Position</label>
          <div style={{ display: "flex" }}>
            <SelectTag id={"Position"} setprop={setprop} />
          </div>
        </FormControl>
      </div>

      <div>
        <FormControl>
          <label htmlFor="Top">Top</label>
          <div>
            <InputTag
              id={"Top"}
              value={topcssvalue}
              setcssvalue={settopcssvalue}
              setcssunits={settopcssunits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Top"}
              units={settopcssunits}
              setcssvalue={settopcssvalue}
              setProp={setprop}
              value={topcssvalue}
              defaultvalue={topcssunits}
            />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Top">Bottom</label>
          <div style={{ display: "flex" }}>
            <InputTag
              id={"Bottom"}
              value={bottomcssvalue}
              setcssvalue={setbottomcssvalue}
              setcssunits={setbottomcssunits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Bottom"}
              units={setbottomcssunits}
              setcssvalue={setbottomcssvalue}
              setProp={setprop}
              value={bottomcssvalue}
              defaultvalue={bottomcssunits}
            />
          </div>
        </FormControl>
      </div>

      <div>
        <FormControl>
          <label htmlFor="Top">Left</label>
          <div>
            <InputTag
              id={"Left"}
              value={leftcssvalue}
              setcssvalue={setleftcssvalue}
              setcssunits={setleftcssunits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Left"}
              units={setleftcssunits}
              setcssvalue={setleftcssvalue}
              setProp={setprop}
              value={leftcssvalue}
              defaultvalue={leftcssunits}
            />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Top">right</label>
          <div style={{}}>
          <InputTag
              id={"Right"}
              value={rightcssvalue}
              setcssvalue={setrightcssvalue}
              setcssunits={setrightcssunits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Right"}
              units={setrightcssunits}
              setcssvalue={setrightcssvalue}
              setProp={setprop}
              value={rightcssvalue}
              defaultvalue={rightcssunits}
            />
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default memo(General);
