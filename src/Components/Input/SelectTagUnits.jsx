import React from "react";
import { data } from "../../data";

const SelectTagUnits = ({
  units,
  setProp,
  id,
  value,
  defaultValue,
  setCssValue,
}) => {
  let x = data.filter((x) => x.id === id);

  return (
    <>
      <select
        value={defaultValue}
        onChange={(event) => {
          setCssValue(value);
          units(`${event.target.value}`);
          let finalValue = `${value}${event.target.value}`;
          switch (id) {
            case "Top":
              setProp((props) => (props.top = finalValue));
              break;
            case "Bottom":
              setProp((props) => (props.bottom = finalValue));
              break;
            case "Right":
              setProp((props) => (props.right = finalValue));
              break;
            case "Left":
              setProp((props) => (props.left = finalValue));
              break;
            case "fontSize":
              setProp((props) => (props.fontSize = finalValue));
              break;
            case "letterSpacing":
              setProp((props) => (props.letterSpacing = finalValue));
              break;
            case "lineHeight":
              setProp((props) => (props.lineHeight = finalValue));
              break;
            case "flexBasis":
              setProp((props) => (props.flexBasis = finalValue));
              break;
            case "Width":
              setProp((props) => (props.width = finalValue));
              break;
            case "maxWidth":
              setProp((props) => (props.maxWidth = finalValue));
              break;
            case "Height":
              setProp((props) => (props.height = finalValue));
              break;
            case "minHeight":
              setProp((props) => (props.minHeight = finalValue));
              break;
            case "marginTop":
              setProp((props) => (props.marginTop = finalValue));
              break;
            case "marginBottom":
              setProp((props) => (props.marginBottom = finalValue));
              break;
            case "marginLeft":
              setProp((props) => (props.marginLeft = finalValue));
              break;
            case "marginRight":
              setProp((props) => (props.marginRight = finalValue));
              break;
            case "paddingTop":
              setProp((props) => (props.paddingTop = finalValue));
              break;
            case "paddingBottom":
              setProp((props) => (props.paddingBottom = finalValue));
              break;

            case "paddingLeft":
              setProp((props) => (props.paddingLeft = finalValue));
              break;
            case "paddingRight":
              setProp((props) => (props.paddingRight = finalValue));
              break;
            case "borderRadiusTopLeft":
              setProp((props) => (props.borderTopLeftRadius = finalValue));
              break;
            case "borderRadiusTopRight":
              setProp((props) => (props.borderTopRightRadius = finalValue));
              break;
            case "borderRadiusBottomLeft":
              setProp((props) => (props.borderBottomLeftRadius = finalValue));
              break;
            case "borderRadiusBottomRight":
              setProp((props) => (props.borderBottomRightRadius = finalValue));
              break;
            case "borderWidth":
              setProp((props) => (props.borderWidth = finalValue));
              break;
            default:
              console.log(finalValue);
          }
        }}
      >
        {x.map((item) => {
          return item.values.map((z, i) => {
            return (
              <option key={i} value={z.units}>
                {z.name}
              </option>
            );
          });
        })}
      </select>
    </>
  );
};

export default SelectTagUnits;
