import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { memo } from "react";
import { FormControl } from "@mui/material";
import SelectTagUnits from "../Input/SelectTagUnits";
import SelectTag from "../Input/SelectTag";
import InputTag from "../Input/InputTag";

const General = ({ setprop, color }) => {
  const [topCssValue, setTopCssValue] = useState("");
  const [topCssUnits, setTopCssUnits] = useState("");

  const [bottomCssValue, setBottomCssValue] = useState("");
  const [bottomCssUnits, setBottomCssUnits] = useState("");

  const [leftCssValue, setLeftCssValue] = useState("");
  const [leftCssUnits, setLeftCssUnits] = useState("");

  const [rightCssValue, setRightCssValue] = useState("");
  const [rightCssUnits, setRightCssUnits] = useState("");
  return (
    <div>
      <h1>General</h1>
      <br />
      <h3>Color</h3>

      <SketchPicker
        color={color || "#000"}
        onChangeComplete={(color) => {
          setprop((props) => (props.color = color.hex));
        }}
      />
      {/* <h2>background-color</h2> */}
      <br />
      <br />
      <h3>Background-Color</h3>
      <SketchPicker
        color={color || "#000"}
        onChangeComplete={(color) => {
          setprop((props) => (props.background = color.hex));
        }}
      />

      <FormControl>
        <label htmlFor="textAlign">Float</label>
        <SelectTag id={"Float"} setprop={setprop} />
      </FormControl>
      <div style={{ display: "flex" }}>
        <FormControl>
          <label htmlFor="textAlign">Display</label>
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
              value={topCssValue}
              setCssValue={setTopCssValue}
              setCssUnits={setTopCssUnits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Top"}
              units={setTopCssUnits}
              setCssValue={setTopCssValue}
              setProp={setprop}
              value={topCssValue}
              defaultValue={topCssUnits}
            />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Top">Bottom</label>
          <div style={{ display: "flex" }}>
            <InputTag
              id={"Bottom"}
              value={bottomCssValue}
              setCssValue={setBottomCssValue}
              setCssUnits={setBottomCssUnits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Bottom"}
              units={setBottomCssUnits}
              setCssValue={setBottomCssValue}
              setProp={setprop}
              value={bottomCssValue}
              defaultValue={bottomCssUnits}
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
              value={leftCssValue}
              setCssValue={setLeftCssValue}
              setCssUnits={setLeftCssUnits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Left"}
              units={setLeftCssUnits}
              setCssValue={setLeftCssValue}
              setProp={setprop}
              value={leftCssValue}
              defaultValue={leftCssUnits}
            />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Top">right</label>
          <div style={{}}>
            <InputTag
              id={"Right"}
              value={rightCssValue}
              setCssValue={setRightCssValue}
              setCssUnits={setRightCssUnits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Right"}
              units={setRightCssUnits}
              setCssValue={setRightCssValue}
              setProp={setprop}
              value={rightCssValue}
              defaultValue={rightCssUnits}
            />
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default memo(General);
