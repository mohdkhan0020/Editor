import React,{useState} from 'react'
import { FormControl,Slider } from '@mui/material';

const Decorations = ({setProp}) => {
    const [borderwidthcssvalue, setborderwidthcssvalue] = useState(0);
    const [borderwidthcssunits, setborderwidthcssunits] = useState(`px`);
  
    const [borderradiusbottomleftcssvalue, setborderradiusbottomleftcssvalue] = useState(0);
    const [borderradiusbottomleftcssunits, setborderradiusbottomleftcssunits] = useState(`px`);
  
    const [borderradiusbottomrightcssvalue, setborderradiusbottomrightcssvalue] = useState(0);
    const [borderradiusbottomrightcssunits, setborderradiusbottomrightcssunits] = useState(`px`);
  
    const [borderradiustopleftcssvalue, setborderradiustopleftcssvalue] = useState(0);
    const [borderradiustopleftcssunits, setborderradiustopleftcssunits] = useState(`px`);
  
    const [borderradiustoprightcssvalue, setborderradiustoprightcssvalue] = useState(0);
    const [borderradiustoprightcssunits, setborderradiustoprightcssunits] = useState(`px`);

    
  const [borderstyle, setborderstyle] = useState(``);
  return (
    <>
        <h1>Decorations</h1>
       <FormControl>
        <label>Opacity</label>
        <Slider
            defaultValue={0}
            min={0}
            max={1}
            step={0.1}
            valueLabelDisplay="auto"
            onChange={(e)=>{
              return setProp((props) => {
                return (props.opacity = e.target.value);
              });
            }}
          />
       </FormControl>
       <h2>Border Radius</h2>
       <FormControl>
       <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top"> Top Left</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={borderradiustopleftcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setborderradiustopleftcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${borderradiustopleftcssvalue}${borderradiustopleftcssunits}`);
                    return (props.borderTopLeftRadius = `${e.target.value}${borderradiustopleftcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setborderradiustopleftcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.borderTopLeftRadius = `${borderradiustopleftcssvalue}${event.target.value}`);
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
            <label htmlFor="Top">Top Right </label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={borderradiustoprightcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setborderradiustoprightcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${borderradiustoprightcssvalue}${borderradiustoprightcssunits}`);
                    return (props.borderTopRightRadius = `${e.target.value}${borderradiustoprightcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setborderradiustoprightcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.borderTopRightRadius = `${borderradiustoprightcssvalue}${event.target.value}`);
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

       </FormControl>
       <FormControl>
       <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top"> Bottom Left</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={borderradiusbottomleftcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setborderradiusbottomleftcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${borderradiusbottomleftcssvalue}${borderradiusbottomleftcssunits}`);
                    return (props.borderBottomLeftRadius = `${e.target.value}${borderradiusbottomleftcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setborderradiusbottomleftcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.borderBottomRightRadius = `${borderradiusbottomleftcssvalue}${event.target.value}`);
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
            <label htmlFor="Top">Bottom Right </label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={borderradiusbottomrightcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setborderradiusbottomrightcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${borderradiusbottomrightcssvalue}${borderradiusbottomrightcssunits}`);
                    return (props.borderBottomRightRadius = `${e.target.value}${borderradiusbottomrightcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setborderradiusbottomrightcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.borderBottomRightRadius = `${borderradiusbottomrightcssvalue}${event.target.value}`);
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
       </FormControl>
       <FormControl>
       <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Style">Style</label>
            <div style={{ display: "flex" }}>
            <select
              name="Style"
              id="Style"
              onChange={(event) => {
                console.log(event.target.value);
                setborderstyle(event.target.value)
                setProp((props) => (props.border = `${event.target.value} ${borderwidthcssvalue}${borderwidthcssunits}`));
              }}
            >
              <option value="none">none</option>
              <option value="solid">
                solid
              </option>
              <option value="dotted">
                dotted
              </option>
              <option value="dashed">
                dashed
              </option>
              <option value="double">
                double
              </option>
              <option value="groove">groove</option>
              <option value="ridge">ridge</option>
              <option value="inset">inset</option>
              <option value="outset">
                outset
              </option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Border width</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setborderwidthcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${borderwidthcssvalue}${borderwidthcssunits}`);
                  return (props.border = `${borderstyle} ${e.target.value}${borderwidthcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setborderwidthcssunits(`${event.target.value}`);
                console.log(`${borderstyle} ${borderwidthcssvalue}${event.target.value}`);
                setProp((props) => {
                  return (props.border = `${borderstyle} ${borderwidthcssvalue}${event.target.value}`);
                });
              }}
            >
              <option value="px">px</option>
              <option value="vh">vh</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
              <option value="vw">vw</option>
            </select>
            </div>

            
          </FormControl>
        </div>
       </FormControl>
      
    </>
  )
}

export default Decorations
