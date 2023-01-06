import React, { useState } from "react";
import { FormControl, Slider } from "@mui/material";
import { memo } from "react";
import SelectTag from "../Input/SelectTag";
import InputTag from "../Input/InputTag";
import SelectTagUnits from "../Input/SelectTagUnits";
const Decorations = ({ setprop }) => {
  const [borderWidthCssValue, setBorderWidthCssValue] = useState("");
  const [borderWidthCssUnits, setBorderWidthCssUnits] = useState("");

  const [borderRadiusBottomLeftCssValue, setBorderRadiusBottomLeftCssValue] =
    useState("");
  const [borderRadiusBottomLeftCssUnits, setBorderRadiusBottomLeftCssUnits] =
    useState("");

  const [borderRadiusBottomRightCssValue, setBorderRadiusBottomRightCssValue] =
    useState("");
  const [borderRadiusBottomRightCssUnits, setBorderRadiusBottomRightCssUnits] =
    useState("");

  const [borderRadiusTopLeftCssValue, setBorderRadiusTopLeftCssValue] =
    useState("");
  const [borderRadiusTopLeftCssUnits, setBorderRadiusTopLeftCssUnits] =
    useState("");

  const [borderRadiusTopRightCssValue, setBorderRadiusTopRightCssValue] =
    useState("");
  const [borderRadiusTopRightCssUnits, setBorderRadiusTopRightCssUnits] =
    useState("");
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
                id={"borderRadiusTopLeft"}
                value={borderRadiusTopLeftCssValue}
                setCssValue={setBorderRadiusTopLeftCssValue}
                setCssUnits={setBorderRadiusTopLeftCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"borderRadiusTopLeft"}
                units={setBorderRadiusTopLeftCssUnits}
                setCssValue={setBorderRadiusTopLeftCssValue}
                setProp={setprop}
                value={borderRadiusTopLeftCssValue}
                defaultValue={borderRadiusTopLeftCssUnits}
              />
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Top Right </label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"borderRadiusTopRight"}
                value={borderRadiusTopRightCssValue}
                setCssValue={setBorderRadiusTopRightCssValue}
                setCssUnits={setBorderRadiusTopRightCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"borderRadiusTopRight"}
                units={setBorderRadiusTopRightCssUnits}
                setCssValue={setBorderRadiusTopRightCssValue}
                setProp={setprop}
                value={borderRadiusTopRightCssValue}
                defaultValue={borderRadiusTopRightCssUnits}
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
                id={"borderRadiusBottomLeft"}
                value={borderRadiusBottomLeftCssValue}
                setCssValue={setBorderRadiusBottomLeftCssValue}
                setCssUnits={setBorderRadiusBottomLeftCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"borderRadiusBottomLeft"}
                units={setBorderRadiusBottomLeftCssUnits}
                setCssValue={setBorderRadiusBottomLeftCssValue}
                setProp={setprop}
                value={borderRadiusBottomLeftCssValue}
                defaultValue={borderRadiusBottomLeftCssUnits}
              />
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Bottom Right </label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"borderRadiusBottomRight"}
                value={borderRadiusBottomRightCssValue}
                setCssValue={setBorderRadiusBottomRightCssValue}
                setCssUnits={setBorderRadiusBottomRightCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"borderRadiusBottomRight"}
                units={setBorderRadiusBottomRightCssUnits}
                setCssValue={setBorderRadiusBottomRightCssValue}
                setProp={setprop}
                value={borderRadiusBottomRightCssValue}
                defaultValue={borderRadiusBottomRightCssUnits}
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
              <SelectTag id={"borderStyle"} setprop={setprop} />
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Top">Border width</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"borderWidth"}
                value={borderWidthCssValue}
                setCssValue={setBorderWidthCssValue}
                setCssUnits={setBorderWidthCssUnits}
                setprop={setprop}
              />

              <SelectTagUnits
                id={"borderWidth"}
                units={setBorderWidthCssUnits}
                setCssValue={setBorderWidthCssValue}
                setProp={setprop}
                value={borderWidthCssValue}
                defaultValue={borderWidthCssUnits}
              />
            </div>
          </FormControl>
        </div>
      </FormControl>
    </>
  );
};

export default memo(Decorations);
