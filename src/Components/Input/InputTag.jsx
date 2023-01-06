import React, { useCallback, memo } from "react";
const InputTag = ({ id, setprop, setCssValue, setCssUnits, value }) => {
  let search = (e) => {
    if (e.key === "Enter") {
      let str = e.target.value;
      let finalValue = "";
      var cssValue = str.replace(/\D/g, "");
      var cssUnits = str.replace(/[^a-z]/gi, "");
      let x = str.split(cssValue);
      if (x[1] === "%") {
        cssUnits = x[1];
      }
      if (!cssUnits) {
        cssUnits = `px`;
      }
      if (isNaN(cssUnits)) {
        setCssValue(cssValue);
        let str = "";
        str = str + cssUnits;
        let units = ["px", "%", "vh", "em", "rem", "vw"];
        if (units.includes(str)) {
          setCssUnits(str);
        }
      }
      switch (str) {
        case "auto":
          finalValue = "auto";
          setCssUnits("");
          setCssValue("auto");
          break;
        case "inherit":
          finalValue = "inherit";
          setCssUnits("");
          setCssValue("inherit");
          break;
        case "initial":
          finalValue = "initial";
          setCssValue("initial");
          setCssUnits("");
          break;
        case "revert":
          finalValue = "revert";
          setCssValue("revert");
          setCssUnits("");
          break;
        case "unset":
          finalValue = "unset";
          setCssValue("unset");
          setCssUnits("");
          break;
        default:
          finalValue = `${cssValue}${cssUnits}`;
          console.log(finalValue);
      }

      switch (id) {
        case "Top":
          setprop((props) => (props.top = finalValue));
          break;
        case "Bottom":
          setprop((props) => (props.bottom = finalValue));
          break;
        case "Right":
          setprop((props) => (props.right = finalValue));
          break;
        case "Left":
          setprop((props) => (props.left = finalValue));
          break;
        case "fontSize":
          setprop((props) => (props.fontSize = finalValue));
          break;
        case "letterSpacing":
          setprop((props) => (props.letterSpacing = finalValue));
          break;
        case "lineHeight":
          setprop((props) => (props.lineHeight = finalValue));
          break;
        case "flexBasis":
          setprop((props) => (props.flexBasis = finalValue));
          break;
        case "Width":
          setprop((props) => (props.width = finalValue));
          break;
        case "maxWidth":
          setprop((props) => (props.maxWidth = finalValue));
          break;
        case "Height":
          setprop((props) => (props.height = finalValue));
          break;
        case "minHeight":
          setprop((props) => (props.minHeight = finalValue));
          break;
        case "marginTop":
          setprop((props) => (props.marginTop = finalValue));
          break;
        case "marginBottom":
          setprop((props) => (props.marginBottom = finalValue));
          break;
        case "marginLeft":
          setprop((props) => (props.marginLeft = finalValue));
          break;
        case "marginRight":
          setprop((props) => (props.marginRight = finalValue));
          break;
        case "paddingTop":
          setprop((props) => (props.paddingTop = finalValue));
          break;
        case "paddingBottom":
          setprop((props) => (props.paddingBottom = finalValue));
          break;

        case "paddingLeft":
          setprop((props) => (props.paddingLeft = finalValue));
          break;
        case "paddingRight":
          setprop((props) => (props.paddingRight = finalValue));
          break;
        case "borderRadiusTopLeft":
          setprop((props) => (props.borderTopLeftRadius = finalValue));
          break;
        case "borderRadiusTopRight":
          setprop((props) => (props.borderTopRightRadius = finalValue));
          break;
        case "borderRadiusBottomLeft":
          setprop((props) => (props.borderBottomLeftRadius = finalValue));
          break;
        case "borderRadiusBottomRight":
          setprop((props) => (props.borderBottomRightRadius = finalValue));
          break;
        case "borderWidth":
          setprop((props) => (props.borderWidth = finalValue));
          break;
        default:
          console.log(finalValue);
      }
    }
  };
  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setCssValue(e.target.value);
        }}
        onKeyDown={useCallback((e) => {
          search(e);
        }, [])}
        style={{ width: `100px` }}
      ></input>
    </>
  );
};

export default memo(InputTag);
