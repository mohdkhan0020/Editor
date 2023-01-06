import React from "react";
import { data } from "../../data";

const SelectTag = ({ setprop, id }) => {
  let x = data.filter((x) => x.id === id);
  return (
    <>
      <select
        onChange={(event) => {
          let finalValue = event.target.value;

          switch (id) {
            case "Float":
              setprop((props) => (props.float = finalValue));
              break;
            case "Display":
              setprop((props) => (props.display = finalValue));
              break;
            case "Position":
              setprop((props) => (props.position = finalValue));
              break;
            case "fontFamily":
              setprop((props) => (props.fontFamily = finalValue));
              break;
            case "textAlign":
              setprop((props) => (props.textAlign = finalValue));
              break;
            case "fontWeight":
              setprop((props) => (props.fontWeight = finalValue));
              break;
            case "flexContainer":
              setprop((props) => (props.display = finalValue));
              break;
            case "flexDirection":
              setprop((props) => (props.flexDirection = finalValue));
              break;
            case "justifyContent":
              setprop((props) => (props.justifyContent = finalValue));
              break;
            case "alignItems":
              setprop((props) => (props.alignItems = finalValue));
              break;
            case "alignSelf":
              setprop((props) => (props.alignSelf = finalValue));
              break;
            case "borderStyle":
              setprop((props) => (props.borderStyle = finalValue));
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

export default SelectTag;
