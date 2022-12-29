import React,{useState} from 'react'
import { FormControl } from '@mui/material';

const Typography = ({setProp}) => {
    const [fontsizecssvalue, setfontsizecssvalue] = useState(0);
    const [fontsizecssunits, setfontsizecssunits] = useState(`px`);
  
    const [letterSpacingcssvalue, setletterSpacingcssvalue] = useState(0);
    const [letterSpacingcssunits, setletterSpacingcssunits] = useState(`px`);

    const [lineheightcssvalue, setlineheightcssvalue] = useState(0);
    const [lineheightcssunits, setlineheightcssunits] = useState(`px`);
  return (
    <div>
        <h1>Typography</h1>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Font Family</label>
            <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.fontFamily = event.target.value));
              }}
            >
              <option value="Arial, Helvetica, sans-serif">Arial</option>
              <option value="Arial Black, Gadget, sans-serif">
                Arial Black
              </option>
              <option value="Brush Script MT, sans-serif">
                Brush Script MT
              </option>
              <option value="Comic Sans MS, cursive, sans-serif">
                Comic Sans MS
              </option>
              <option value="Courier New, Courier, monospace">
                Courier New
              </option>
              <option value="Georgia, serif">Georgia</option>
              <option value="Helvetica, sans-serif">Helvetica</option>
              <option value="Charcoal, sans-serif">Impact</option>
              <option value="Lucida Sans Unicode, Lucida Grande, sans-serif">
                Lucida Sans Unicode
              </option>
              <option value="Tahoma, Geneva, sans-serif">Tahoma</option>
              <option value="Times New Roman, Times, serif">
                Times New Roman
              </option>
              <option value="Trebuchet MS, Helvetica, sans-serif">
                Trebuchet MS
              </option>
              <option value="Verdana, Geneva, sans-serif">Verdana</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Font Size</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={fontsizecssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setfontsizecssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${fontsizecssvalue}${fontsizecssunits}`);
                  return (props.fontSize = `${e.target.value}${fontsizecssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setfontsizecssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.fontSize = `${fontsizecssvalue}${event.target.value}`);
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

        {/*  */}
        <FormControl>
          
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Font Weight</label>
            <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.fontWeight = event.target.value));
              }}
            >
              <option value={100}>
                Thin
              </option>
              <option value={200}>
                Extra Light
              </option>
              <option value={300}>
              Light
              </option>
              <option value={400}>
                Normal
              </option>
              <option value={500}>Medium</option>
              <option value={600}>Semi Bold</option>
              <option value={700}>Bold</option>
              <option value={800}>
                Extra Bold
              </option>
              <option value={900}>
                Ultra Bold
              </option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Letter Spacing</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={letterSpacingcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setletterSpacingcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${letterSpacingcssvalue}${letterSpacingcssunits}`);
                  return (props.letterSpacing = `${e.target.value}${letterSpacingcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setletterSpacingcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.letterSpacing = `${letterSpacingcssvalue}${event.target.value}`);
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
          <label htmlFor="textalign">Text Align</label>
            <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.textAlign = event.target.value));
              }}
            >
              <option value={'left'}>
                Left
              </option>
              <option value={'right'}>
              Right
              </option>
              <option value={'center'}>
              Center
              </option>
              <option value={'justify'}>
                Justify
              </option>
              
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Line Height</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={lineheightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setlineheightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${lineheightcssvalue}${lineheightcssunits}`);
                  return (props.lineHeight = `${e.target.value}${lineheightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setlineheightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.lineHeight = `${lineheightcssvalue}${event.target.value}`);
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
      
    </div>
  )
}

export default Typography
