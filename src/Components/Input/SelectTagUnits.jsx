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
          let finalValue = `${value}${event.target.value}`;
          switch (id) {
            case "Top":
              setProp((props) => props.top = finalValue);
              break;
            case "Bottom":
              setProp((props) => props.bottom = finalValue);
              break;
            case "Right":
              setProp((props) => props.right = finalValue);
              break;
            case "Left":
              setProp((props) => (props.left =finalValue));
              break;
            case "FontSize":
              setProp((props) => (props.fontSize = finalValue));
              break;
            case "LetterSpacing":
              setProp((props) => (props.letterSpacing = finalValue));
              break;
            case "LineHeight":
              setProp((props) => (props.lineHeight = finalValue));
              break;
            case "FlexBasis":
              setProp((props) => (props.flexBasis = finalValue));
              break;
            case "Width":
              setProp((props) => (props.width = finalValue));
              break;
            case "MaxWidth":
              setProp((props) => (props.maxWidth = finalValue));
              break;
            case "Height":
              setProp((props) => (props.height = finalValue));
              break;
            case "MinHeight":
              setProp((props) => (props.minHeight = finalValue));
              break;
            case "MarginTop":
              setProp((props) => (props.marginTop = finalValue));
              break;
            case "MarginBottom":
              setProp((props) => (props.marginBottom = finalValue));
              break;
            case "MarginLeft":
              setProp((props) => (props.marginLeft = finalValue));
              break;
            case "MarginRight":
              setProp((props) => (props.marginRight = finalValue));
              break;
            case "PaddingTop":
              setProp((props) => (props.paddingTop = finalValue));
              break;
            case "PaddingBottom":
              setProp((props) => (props.paddingBottom = finalValue));
              break;
    
            case "PaddingLeft":
              setProp((props) => (props.paddingLeft = finalValue));
              break;
            case "PaddingRight":
              setProp((props) => (props.paddingRight = finalValue));
              break;
            case "BorderRadiusTopLeft":
              setProp(
                (props) => (props.borderTopLeftRadius = finalValue)
              );
              break;
            case "BorderRadiusTopRight":
              setProp(
                (props) => (props.borderTopRightRadius = finalValue)
              );
              break;
            case "BorderRadiusBottomLeft":
              setProp(
                (props) => (props.borderBottomLeftRadius = finalValue)
              );
              break;
            case "BorderRadiusBottomRight":
              setProp(
                (props) =>
                  (props.borderBottomRightRadius = finalValue)
              );
              break;
            case "BorderWidth":
              setProp((props) => (props.borderWidth = finalValue));
              break;
            default:
              console.log(finalValue);
          }
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
