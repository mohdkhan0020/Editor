import React from "react";
import {data} from '../../data'

const SelectTagUnits = ({ units, setProp, id, value, defaultvalue,setcssvalue }) => {
  let x = data.filter((x)=>x.id===id)
 
  return (
    <>
      <select
        value={defaultvalue}
        onChange={(event) => {
          setcssvalue(value)
          units(`${event.target.value}`);
          setProp((props) => {
            if (id === "Bottom") {
              return (props.bottom = `${value}${event.target.value}`);
            }
            if (id === "Right") {
              return (props.right = `${value}${event.target.value}`);
            }
            if (id === "Left") {
              return (props.left = `${value}${event.target.value}`);
            }
            if (id === "Top") {
              return (props.top = `${value}${event.target.value}`);
            }
            if (id === "FontSize") {
              return (props.fontSize = `${value}${event.target.value}`);
            }
            if (id === "LetterSpacing") {
              return (props.fontSize = `${value}${event.target.value}`);
            }
            if (id === "LineHeight") {
              return (props.lineHeight = `${value}${event.target.value}`);
            }
            if (id === "FlexBasis") {
              return (props.flexBasis = `${value}${event.target.value}`);
            }
            if (id === "Width") {
              return (props.width = `${value}${event.target.value}`);
            }
            if (id === "MaxWidth") {
              return (props.maxWidth = `${value}${event.target.value}`);
            }
            if (id === "Height") {
              return (props.height = `${value}${event.target.value}`);
            }
            if (id === "MinHeight") {
              return (props.minHeight = `${value}${event.target.value}`);
            }
            if (id === "MarginTop") {
              return (props.marginTop = `${value}${event.target.value}`);
            }
            if (id === "MarginBottom") {
              return (props.marginBottom = `${value}${event.target.value}`);
            }
            if (id === "MarginLeft") {
              return (props.marginLeft = `${value}${event.target.value}`);
            }
            if (id === "MarginRight") {
              return (props.marginRight = `${value}${event.target.value}`);
            }
            if (id === "PaddingTop") {
              return (props.paddingTop = `${value}${event.target.value}`);
            }
            if (id === "PaddingBottom") {
              return (props.paddingBottom = `${value}${event.target.value}`);
            }
            if (id === "PaddingLeft") {
              return (props.paddingLeft = `${value}${event.target.value}`);
            }
            if (id === "PaddingRight") {
              return (props.paddingRight = `${value}${event.target.value}`);
            }
            if (id === "BorderRadiusTopLeft") {
              return (props.borderTopLeftRadius = `${value}${event.target.value}`);
            }
            if (id === "BorderRadiusTopRight") {
              return (props.borderTopRightRadius = `${value}${event.target.value}`);
            }
            if (id === "BorderRadiusBottomLeft") {
              return (props.borderBottomLeftRadius = `${value}${event.target.value}`);
            }
            if (id === "BorderRadiusBottomRight") {
              return (props.borderBottomRightRadius = `${value}${event.target.value}`);
            }
            if (id === "BorderWidth") {
              return (props.borderWidth = `${value}${event.target.value}`);
            }
          });
        }}
      >
        {
          x.map((item)=>{
            return item.values.map((z,i)=>{
              return<option key={i} value={z.units}>{z.name}</option>
            })
          })
        }
        
      </select>
    </>
  );
}

export default SelectTagUnits;
