import React, { useCallback, memo } from "react";
const InputTag = ({ id, setprop, setcssvalue, setcssunits, value }) => {
  let search = (e) => {
    if (e.key === "Enter") {
      let str = e.target.value;
      let finalValue = "";
      var cssvalue = str.replace(/\D/g, "");
      var cssunits = str.replace(/[^a-z]/gi, "");
      let x = str.split(cssvalue);
      if (x[1] === "%") {
        cssunits = x[1];
      }
      if (!cssunits) {
        cssunits = `px`;
      }
      if (isNaN(cssunits)) {
        setcssvalue(cssvalue);
        let str = "";
        str = str + cssunits;
        let units = ["px", "%", "vh", "em", "rem", "vw"];
        if (units.includes(str)) {
          setcssunits(str);
        }
      }
      switch (str) {
        case "auto":
          finalValue = "auto";
          setcssunits("");
          setcssvalue("auto");
          break;
        case "inherit":
          finalValue = "inherit";
          setcssunits("");
          setcssvalue("inherit");
          break;
        case "initial":
          finalValue = "initial";
          setcssvalue("initial");
          setcssunits("");
          break;
        case "revert":
          finalValue = "revert";
          setcssvalue("revert");
          setcssunits("");
          break;
        case "unset":
          finalValue = "unset";
          setcssvalue("unset");
          setcssunits("");
          break;
        default:
          finalValue = `${cssvalue}${cssunits}`;
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
        case "FontSize":
          setprop((props) => (props.fontSize = finalValue));
          break;
        case "LetterSpacing":
          setprop((props) => (props.letterSpacing = finalValue));
          break;
        case "LineHeight":
          setprop((props) => (props.lineHeight = finalValue));
          break;
        case "FlexBasis":
          setprop((props) => (props.flexBasis = finalValue));
          break;
        case "Width":
          setprop((props) => (props.width = finalValue));
          break;
        case "MaxWidth":
          setprop((props) => (props.maxWidth = finalValue));
          break;
        case "Height":
          setprop((props) => (props.height = finalValue));
          break;
        case "MinHeight":
          setprop((props) => (props.minHeight = finalValue));
          break;
        case "MarginTop":
          setprop((props) => (props.marginTop = finalValue));
          break;
        case "MarginBottom":
          setprop((props) => (props.marginBottom = finalValue));
          break;
        case "MarginLeft":
          setprop((props) => (props.marginLeft = finalValue));
          break;
        case "MarginRight":
          setprop((props) => (props.marginRight = finalValue));
          break;
        case "PaddingTop":
          setprop((props) => (props.paddingTop = finalValue));
          break;
        case "PaddingBottom":
          setprop((props) => (props.paddingBottom = finalValue));
          break;

        case "PaddingLeft":
          setprop((props) => (props.paddingLeft = finalValue));
          break;
        case "PaddingRight":
          setprop((props) => (props.paddingRight = finalValue));
          break;
        case "BorderRadiusTopLeft":
          setprop((props) => (props.borderTopLeftRadius = finalValue));
          break;
        case "BorderRadiusTopRight":
          setprop((props) => (props.borderTopRightRadius = finalValue));
          break;
        case "BorderRadiusBottomLeft":
          setprop((props) => (props.borderBottomLeftRadius = finalValue));
          break;
        case "BorderRadiusBottomRight":
          setprop((props) => (props.borderBottomRightRadius = finalValue));
          break;
        case "BorderWidth":
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
          setcssvalue(e.target.value);
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
