import React from 'react'
import {data} from '../../data'

const SelectTag = ({ setprop, id}) => {
    let x = data.filter((x)=>x.id===id)
  return (
    <>
    <select
        onChange={(event) => {
          setprop((props) => {
            if (id === "Float") {
              return (props.float = event.target.value);
            }
            if (id === "Display") {
              return (props.display = event.target.value);
            }
            if (id === "Position") {
              return (props.position = event.target.value);
            }
            if (id === "FontFamily") {
              return (props.fontFamily = event.target.value);
            }
            if (id === "TextAlign") {
              return (props.textAlign = event.target.value);
            }
            if (id === "FontWeight") {
              return (props.textAlign = event.target.value);
            }
            if (id === "FlexContainer") {
              return (props.display = event.target.value);
            }
            if (id === "FlexDirection") {
              return (props.flexDirection = event.target.value);
            }
            if (id === "JustifyContent") {
              return (props.justifyContent = event.target.value);
            }
            if (id === "AlignItems") {
              return (props.alignItems = event.target.value);
            }
            if (id === "AlignSelf") {
              return (props.alignSelf = event.target.value);
            }
            if (id === "BorderStyle") {
              return (props.borderStyle = event.target.value);
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
  )
}

export default SelectTag
