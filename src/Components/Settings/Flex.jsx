import React, { useState, memo } from "react";
import { FormControl } from "@mui/material";
import SelectTag from "../Input/SelectTag";
import InputTag from "../Input/InputTag";
import SelectTagUnits from "../Input/SelectTagUnits";

const Flex = ({ setprop }) => {
  const [flexBasisCssValue, setFlexBasisCssValue] = useState("");
  const [flexBasisCssUnits, setFlexBasisCssUnits] = useState("");
  return (
    <>
      <FormControl>
        <h1>Flex</h1>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="textAlign">Flex</label>
            <div style={{ display: "flex" }}>
              <SelectTag id={"flexContainer"} setprop={setprop} />
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Position">Flex Direction</label>
            <div style={{ display: "flex" }}>
              <SelectTag id={"flexDirection"} setprop={setprop} />
            </div>
          </FormControl>
        </div>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="textAlign">Justify Content</label>
            <div style={{ display: "flex" }}>
              <SelectTag id={"justifyContent"} setprop={setprop} />
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Position">Align Items</label>
            <div style={{ display: "flex" }}>
              <SelectTag id={"alignItems"} setprop={setprop} />
            </div>
          </FormControl>
        </div>
      </FormControl>
      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top"> Flex Grow</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="0"
                min="0"
                max="50"
                onChange={(e) => {
                  setprop((props) => {
                    return (props.flexGrow = e.target.value);
                  });
                }}
              ></input>
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Flex Shrink </label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="0"
                min="0"
                max="50"
                onChange={(e) => {
                  setprop((props) => {
                    return (props.flexShrink = e.target.value);
                  });
                }}
              ></input>
            </div>
          </FormControl>
        </div>
      </FormControl>

      <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="textAlign">Align Self</label>
            <div style={{ display: "flex" }}>
              <SelectTag id={"alignSelf"} setprop={setprop} />
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Top">Flex Basis</label>
            <div style={{ display: "flex" }}>
              <InputTag
                id={"flexBasis"}
                value={flexBasisCssValue}
                setCssValue={setFlexBasisCssValue}
                setCssUnits={setFlexBasisCssUnits}
                setprop={setprop}
              />

              <SelectTagUnits
                id={"flexBasis"}
                units={setFlexBasisCssUnits}
                setCssValue={setFlexBasisCssValue}
                setProp={setprop}
                value={flexBasisCssValue}
                defaultValue={flexBasisCssUnits}
              />
            </div>
          </FormControl>
        </div>
      </FormControl>
    </>
  );
};
export default memo(Flex);
