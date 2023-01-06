import React, { useState, memo } from "react";
import { FormControl } from "@mui/material";
import InputTag from "../Input/InputTag";
import SelectTagUnits from "../Input/SelectTagUnits";

const Dimension = ({ setprop }) => {
  const [widthCssValue, setWidthCssValue] = useState("");
  const [widthCssUnits, setWidthCssUnits] = useState("");

  const [maxWidthCssValue, setMaxWidthCssValue] = useState("");
  const [maxWidthCssUnits, setMaxWidthCssUnits] = useState("");

  const [heightCssValue, setHeightCssValue] = useState("");
  const [heightCssUnits, setHeightCssUnits] = useState("");

  const [minHeightCssValue, setMinHeightCssValue] = useState("");
  const [minHeightCssUnits, setMinHeightCssUnits] = useState("");

  const [marginTopCssValue, setMarginTopCssValue] = useState("");
  const [marginTopCssUnits, setMarginTopCssUnits] = useState("");

  const [marginBottomCssValue, setMarginBottomCssValue] = useState("");
  const [marginBottomCssUnits, setMarginBottomCssUnits] = useState("");

  const [marginLeftCssValue, setMarginLeftCssValue] = useState("");
  const [marginLeftCssUnits, setMarginLeftCssUnits] = useState("");

  const [marginRightCssValue, setMarginRightCssValue] = useState("");
  const [marginRightCssUnits, setMarginRightCssUnits] = useState("");

  const [paddingTopCssValue, setPaddingTopCssValue] = useState("");
  const [paddingTopCssUnits, setPaddingTopCssUnits] = useState("");

  const [paddingBottomCssValue, setPaddingBottomCssValue] = useState("");
  const [paddingBottomCssUnits, setPaddingBottomCssUnits] = useState("");

  const [paddingLeftCssValue, setPaddingLeftCssValue] = useState("");
  const [paddingLeftCssUnits, setPaddingLeftCssUnits] = useState("");

  const [paddingRightCssValue, setPaddingRightCssValue] = useState("");
  const [paddingRightCssUnits, setPaddingRightCssUnits] = useState("");
  return (
    <>
      <h1>Dimension</h1>
      <div style={{ display: "flex" }}>
        <FormControl>
          <label htmlFor="Width">Width</label>
          <div style={{ display: "flex" }}>
            <InputTag
              id={"Width"}
              value={widthCssValue}
              setCssValue={setWidthCssValue}
              setCssUnits={setWidthCssUnits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"Width"}
              units={setWidthCssUnits}
              setCssValue={setWidthCssValue}
              setProp={setprop}
              value={widthCssValue}
              defaultValue={widthCssUnits}
            />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Top">height</label>
          <div style={{ display: "flex" }}>
            <InputTag
              id={"Height"}
              value={heightCssValue}
              setCssValue={setHeightCssValue}
              setCssUnits={setHeightCssUnits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Height"}
              units={setHeightCssUnits}
              setCssValue={setHeightCssValue}
              setProp={setprop}
              value={heightCssValue}
              defaultValue={heightCssUnits}
            />
          </div>
        </FormControl>
      </div>
      <div style={{ display: "flex" }}>
        <FormControl>
          <label htmlFor="Width">Max Width</label>
          <div style={{ display: "flex" }}>
            <InputTag
              id={"maxWidth"}
              value={maxWidthCssValue}
              setCssValue={setMaxWidthCssValue}
              setCssUnits={setMaxWidthCssUnits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"maxWidth"}
              units={setMaxWidthCssUnits}
              setCssValue={setMaxWidthCssValue}
              setProp={setprop}
              value={maxWidthCssValue}
              defaultValue={maxWidthCssUnits}
            />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Top">Min Height</label>
          <div style={{ display: "flex" }}>
            <InputTag
              id={"minHeight"}
              value={minHeightCssValue}
              setCssValue={setMinHeightCssValue}
              setCssUnits={setMinHeightCssUnits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"minHeight"}
              units={setMinHeightCssUnits}
              setCssValue={setMinHeightCssValue}
              setProp={setprop}
              value={minHeightCssValue}
              defaultValue={minHeightCssUnits}
            />
          </div>
        </FormControl>
      </div>
      <h2>Margin</h2>
      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Margin Top</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"marginTop"}
                value={marginTopCssValue}
                setCssValue={setMarginTopCssValue}
                setCssUnits={setMarginTopCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"marginTop"}
                units={setMarginTopCssUnits}
                setCssValue={setMarginTopCssValue}
                setProp={setprop}
                value={marginTopCssValue}
                defaultValue={marginTopCssUnits}
              />
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Margin Bottom</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"marginBottom"}
                value={marginBottomCssValue}
                setCssValue={setMarginBottomCssValue}
                setCssUnits={setMarginBottomCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"marginBottom"}
                units={setMarginBottomCssUnits}
                setCssValue={setMarginBottomCssValue}
                setProp={setprop}
                value={marginBottomCssValue}
                defaultValue={marginBottomCssUnits}
              />
            </div>
          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Margin Left</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"marginLeft"}
                value={marginLeftCssValue}
                setCssValue={setMarginLeftCssValue}
                setCssUnits={setMarginLeftCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"marginLeft"}
                units={setMarginLeftCssUnits}
                setCssValue={setMarginLeftCssValue}
                setProp={setprop}
                value={marginLeftCssValue}
                defaultValue={marginLeftCssUnits}
              />
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Top">Margin right</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"marginRight"}
                value={marginRightCssValue}
                setCssValue={setMarginRightCssValue}
                setCssUnits={setMarginRightCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"marginRight"}
                units={setMarginRightCssUnits}
                setCssValue={setMarginRightCssValue}
                setProp={setprop}
                value={marginRightCssValue}
                defaultValue={marginRightCssUnits}
              />
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
              <InputTag
                id={"paddingTop"}
                value={paddingTopCssValue}
                setCssValue={setPaddingTopCssValue}
                setCssUnits={setPaddingTopCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"paddingTop"}
                units={setPaddingTopCssUnits}
                setCssValue={setPaddingTopCssValue}
                setProp={setprop}
                value={paddingTopCssValue}
                defaultValue={paddingTopCssUnits}
              />
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Padding Bottom</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"paddingBottom"}
                value={paddingBottomCssValue}
                setCssValue={setPaddingBottomCssValue}
                setCssUnits={setPaddingBottomCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"paddingBottom"}
                units={setPaddingBottomCssUnits}
                setCssValue={setPaddingBottomCssValue}
                setProp={setprop}
                value={paddingBottomCssValue}
                defaultValue={paddingBottomCssUnits}
              />
            </div>
          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Padding Left</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"paddingLeft"}
                value={paddingLeftCssValue}
                setCssValue={setPaddingLeftCssValue}
                setCssUnits={setPaddingLeftCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"paddingLeft"}
                units={setPaddingLeftCssUnits}
                setCssValue={setPaddingLeftCssValue}
                setProp={setprop}
                value={paddingLeftCssValue}
                defaultValue={paddingLeftCssUnits}
              />
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Top">padding right</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"paddingRight"}
                value={paddingRightCssValue}
                setCssValue={setPaddingRightCssValue}
                setCssUnits={setPaddingRightCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"paddingRight"}
                units={setPaddingRightCssUnits}
                setCssValue={setPaddingRightCssValue}
                setProp={setprop}
                value={paddingRightCssValue}
                defaultValue={paddingRightCssUnits}
              />
            </div>
          </FormControl>
        </div>
      </FormControl>
    </>
  );
};

export default memo(Dimension);
