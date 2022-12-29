import React,{useState} from 'react'
import { SketchPicker } from "react-color";

import {FormControl } from "@mui/material";

const General = ({setProp,color}) => {
    const [topcssvalue, settopcssvalue] = useState(0);
    const [topcssunits, settopcssunits] = useState(`px`);
  
    const [bottomcssvalue, setbottomcssvalue] = useState(0);
    const [bottomcssunits, setbottomcssunits] = useState(`px`);
  
    const [leftcssvalue, setleftcssvalue] = useState(0);
    const [leftcssunits, setleftcssunits] = useState(`px`);
  
    const [rightcssvalue, setrightcssvalue] = useState(0);
    const [rightcssunits, setrightcssunits] = useState(`px`);
  
  return (
    <div>
         <h1>General</h1>
        
        <SketchPicker
          color={color || "#000"}
          onChangeComplete={(color) => {
            setProp((props) => (props.color = color.hex));
          }}
        />

        <FormControl>
          <label htmlFor="textalign">Float</label>
          <select
            name="float"
            id="float"
            onChange={(event) => {
              console.log(event.target.value);
              setProp((props) => (props.float = event.target.value));
            }}
          >
            <option value="left">left</option>
            <option value="right">right</option>
            <option value="none">none</option>
          </select>
        </FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Display</label>
            <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.display = event.target.value));
              }}
            >
              <option value="inline">inline</option>
              <option value="block">block</option>
              <option value="inline-block">inline block</option>
              <option value="flex">flex</option>
              <option value="none">none</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Position">Position</label>
            <div style={{ display: "flex" }}>
            <select
              name="Position"
              id="Position"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.position = event.target.value));
              }}
            >
              <option value="static">static</option>
              <option value="relative">relative</option>
              <option value="absolute">absolute</option>
              <option value="fixed">fixed</option>
            </select>
            </div>


          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Top</label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                id="topvalue"
                name="quantity"
                onKeyDown={(e)=>{
                  if(e.key==="Enter"){
                    let str = document.getElementById("topvalue").value
                  var cssvalue = str.replace(/\D/g, "");
                  var cssunits = str.replace(/[^a-z]/gi, '');
                  console.log("units "+cssunits);
                  console.log("value "+cssvalue);
                  if (isNaN(cssunits)) {
                    settopcssvalue(cssvalue)
                    let str=""
                    str = str + cssunits;
                    let units = ["px", "%", "vh", "em", "rem", "vw"];
                    if (units.includes(str)){
                      settopcssunits(str)
                      document.getElementById("topvalue").value=cssvalue;
                    }
                  }
                  setProp((props) => {
                    // console.log(`${topcssvalue}${topcssunits}`);
                    return (props.top = `${cssvalue}${cssunits}`);
                  });

                  }
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                value={topcssunits}
                onChange={(event) => {
                  settopcssunits(`${event.target.value}`);
                  document.getElementById("topvalue").value=`${topcssvalue}`;
                  setProp((props) => {
                    return (props.top = `${topcssvalue}${event.target.value}`);
                  });
                }}
              >
                <option value="px">px</option>
                <option value="%">%</option>
                <option value="vh">vh</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
                <option value="vw">vw</option>
              </select>
            </div>
          </FormControl>
          <FormControl>
            <label htmlFor="Top">Bottom</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={bottomcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setbottomcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${bottomcssvalue}${bottomcssunits}`);
                    return (props.bottom = `${e.target.value}${bottomcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Bottom"
                onChange={(event) => {
                  setbottomcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.bottom = `${bottomcssvalue}${event.target.value}`);
                  });
                }}
              >
                <option value="px">px</option>
                <option value="%">%</option>
                <option value="vh">vh</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
                <option value="vw">vw</option>
              </select>
            </div>


          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Top">Left</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={leftcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setleftcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${leftcssvalue}${leftcssunits}`);
                  return (props.left = `${e.target.value}${leftcssunits}`);
                });
              }}
            ></input>

            <select
              name="Left"
              id="Left"
              onChange={(event) => {
                setleftcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.left = `${leftcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">right</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={rightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setrightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${rightcssvalue}${rightcssunits}`);
                  return (props.right = `${e.target.value}${rightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Right"
              id="Right"
              onChange={(event) => {
                setrightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.right = `${rightcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
            </div>

            
          </FormControl>
        </div>
      
    </div>
  )
}

export default General
