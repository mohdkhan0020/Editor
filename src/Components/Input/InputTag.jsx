import React from "react";

const InputTag = ({ id, setprop, setcssvalue, setcssunits, value }) => {
  let search = (e) => {
    if (e.key === "Enter") {
      let str = e.target.value;
      var cssvalue = str.replace(/\D/g, "");
      var cssunits = str.replace(/[^a-z]/gi, "");
      let x = str.split(cssvalue);
      if (x[1] === "%") {
        cssunits = x[1];
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
      if (id === "Top") {
        setprop((props) => {
          return (props.top = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "Bottom") {
        setprop((props) => {
          return (props.bottom = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "Right") {
        setprop((props) => {
          return (props.right = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "Left") {
        setprop((props) => {
          return (props.left = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "FontSize") {
        setprop((props) => {
          return (props.fontSize = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "LetterSpacing") {
        setprop((props) => {
          return (props.letterSpacing = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "LineHeight") {
        setprop((props) => {
          return (props.lineHeight = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "FlexBasis") {
        setprop((props) => {
          return (props.flexBasis = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "Width") {
        setprop((props) => {
          return (props.width = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "MaxWidth") {
        setprop((props) => {
          return (props.maxWidth = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "Height") {
        setprop((props) => {
          return (props.height = `${cssvalue}${cssunits}`);
        });
      }
      if (id === "MinHeight") {
        setprop((props) => {
          return (props.minHeight= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "MarginTop") {
        setprop((props) => {
          return (props.marginTop= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "MarginBottom") {
        setprop((props) => {
          return (props.marginBottom= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "MarginLeft") {
        setprop((props) => {
          return (props.marginLeft= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "MarginRight") {
        setprop((props) => {
          return (props.marginRight= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "PaddingTop") {
        setprop((props) => {
          return (props.paddingTop= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "PaddingBottom") {
        setprop((props) => {
          return (props.paddingBottom= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "PaddingLeft") {
        setprop((props) => {
          return (props.paddingLeft= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "PaddingRight") {
        setprop((props) => {
          return (props.paddingRight= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "BorderRadiusTopLeft") {
        setprop((props) => {
          return (props.borderTopLeftRadius= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "BorderRadiusTopRight") {
        setprop((props) => {
          return (props.borderTopRightRadius= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "BorderRadiusBottomLeft") {
        setprop((props) => {
          return (props.borderBottomLeftRadius= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "BorderRadiusBottomRight") {
        setprop((props) => {
          return (props.borderBottomRightRadius= `${cssvalue}${cssunits}`);
        });
      }
      if (id === "BorderWidth") {
        setprop((props) => {
          return (props.borderWidth= `${cssvalue}${cssunits}`);
        });
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
        onKeyDown={(e) => search(e)}
      ></input>
    </>
  );
};

export default InputTag;
