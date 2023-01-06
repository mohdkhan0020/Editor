import React, { useState, memo } from "react";
import { FormControl } from "@mui/material";
import SelectTag from "../Input/SelectTag";
import InputTag from "../Input/InputTag";
import SelectTagUnits from "../Input/SelectTagUnits";

const Typography = ({ setprop }) => {
  const [fontSizeCssValue, setFontSizeCssValue] = useState("");
  const [fontSizeCssUnits, setFontSizeCssUnits] = useState("");

  const [letterSpacingCssValue, setLetterSpacingCssValue] = useState("");
  const [letterSpacingCssUnits, setLetterSpacingCssUnits] = useState("");

  const [lineHeightCssValue, setLineHeightCssValue] = useState("");
  const [lineHeightCssUnits, setLineHeightCssUnits] = useState("");
  return (
    <div>
      <h1>Typography</h1>
      <div style={{ display: "flex" }}>
        <FormControl>
          <label htmlFor="fontFamily">Font Family</label>
          <div style={{ display: "flex" }}>
            <SelectTag id={"fontFamily"} setprop={setprop} />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor="Top">Font Size</label>
          <div style={{ display: "flex" }}>
            <InputTag
              id={"fontSize"}
              value={fontSizeCssValue}
              setCssValue={setFontSizeCssValue}
              setCssUnits={setFontSizeCssUnits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"fontSize"}
              units={setFontSizeCssUnits}
              setCssValue={setFontSizeCssValue}
              setProp={setprop}
              value={fontSizeCssValue}
              defaultValue={fontSizeCssUnits}
            />
          </div>
        </FormControl>
      </div>
      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="textAlign">Font Weight</label>
            <div style={{ display: "flex" }}>
              <SelectTag id={"fontWeight"} setprop={setprop} />
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Top">Letter Spacing</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"letterSpacing"}
                value={letterSpacingCssValue}
                setCssValue={setLetterSpacingCssValue}
                setCssUnits={setLetterSpacingCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"letterSpacing"}
                units={setLetterSpacingCssUnits}
                setCssValue={setLetterSpacingCssValue}
                setProp={setprop}
                value={letterSpacingCssValue}
                defaultValue={letterSpacingCssUnits}
              />
            </div>
          </FormControl>
        </div>
      </FormControl>
      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="textAlign">Text Align</label>
            <div style={{ display: "flex" }}>
              <SelectTag id={"textAlign"} setprop={setprop} />
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Top">Line Height</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"lineHeight"}
                value={lineHeightCssValue}
                setCssValue={setLineHeightCssValue}
                setCssUnits={setLineHeightCssUnits}
                setprop={setprop}
              />
              <SelectTagUnits
                id={"lineHeight"}
                units={setLineHeightCssUnits}
                setCssValue={setLineHeightCssValue}
                setProp={setprop}
                value={lineHeightCssValue}
                defaultValue={lineHeightCssUnits}
              />
            </div>
          </FormControl>
        </div>
      </FormControl>
    </div>
  );
};
export default memo(Typography);
