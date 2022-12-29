import React,{useState} from 'react'
import {FormControl } from "@mui/material";

const Dimension = ({setProp}) => {
    const [widthcssvalue, setwidthcssvalue] = useState(0);
    const [widthcssunits, setwidthcssunits] = useState(`px`);
  
    const [maxwidthcssvalue, setmaxwidthcssvalue] = useState(0);
    const [maxwidthcssunits, setmaxwidthcssunits] = useState(`px`);
  
    const [heightcssvalue, setheightcssvalue] = useState(0);
    const [heightcssunits, setheightcssunits] = useState(`px`);
  
    const [minheightcssvalue, setminheightcssvalue] = useState(0);
    const [minheightcssunits, setminheightcssunits] = useState(`px`);
  
    const [margintopcssvalue, setmargintopcssvalue] = useState(0);
    const [margintopcssunits, setmargintopcssunits] = useState(`px`);
  
    const [marginbottomcssvalue, setmarginbottomcssvalue] = useState(0);
    const [marginbottomcssunits, setmarginbottomcssunits] = useState(`px`);
  
    const [marginleftcssvalue, setmarginleftcssvalue] = useState(0);
    const [marginleftcssunits, setmarginleftcssunits] = useState(`px`);
  
    const [marginrightcssvalue, setmarginrightcssvalue] = useState(0);
    const [marginrightcssunits, setmarginrightcssunits] = useState(`px`);
  
    const [paddingtopcssvalue, setpaddingtopcssvalue] = useState(0);
    const [paddingtopcssunits, setpaddingtopcssunits] = useState(`px`);
  
    const [paddingbottomcssvalue, setpaddingbottomcssvalue] = useState(0);
    const [paddingbottomcssunits, setpaddingbottomcssunits] = useState(`px`);
  
    const [paddingleftcssvalue, setpaddingleftcssvalue] = useState(0);
    const [paddingleftcssunits, setpaddingleftcssunits] = useState(`px`);
  
    const [paddingrightcssvalue, setpaddingrightcssvalue] = useState(0);
    const [paddingrightcssunits, setpaddingrightcssunits] = useState(`px`);
  return (
    <>
        <h1>Dimension</h1>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Width">Width</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={widthcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setwidthcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${widthcssvalue}${widthcssunits}`);
                  return (props.width = `${e.target.value}${widthcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setwidthcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.width = `${widthcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">height</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={heightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setheightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${heightcssvalue}${heightcssunits}`);
                  return (props.height = `${e.target.value}${heightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setheightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.height = `${heightcssvalue}${event.target.value}`);
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

        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Width">Max Width</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={maxwidthcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setmaxwidthcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${maxwidthcssvalue}${maxwidthcssunits}`);
                  return (props.maxWidth = `${e.target.value}${maxwidthcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setmaxwidthcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.maxWidth = `${maxwidthcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">Min Height</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={minheightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setminheightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${minheightcssvalue}${minheightcssunits}`);
                  return (props.minHeight = `${e.target.value}${minheightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setminheightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.minHeight = `${minheightcssvalue}${event.target.value}`);
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
        <h2>Margin</h2>
        <FormControl>

          <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Margin Top</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={margintopcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setmargintopcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${margintopcssvalue}${margintopcssunits}`);
                    return (props.marginTop = `${e.target.value}${margintopcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setmargintopcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.marginTop = `${margintopcssvalue}${event.target.value}`);
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
            <label htmlFor="Top">Margin Bottom</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={marginbottomcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setmarginbottomcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${marginbottomcssvalue}${marginbottomcssunits}`);
                    return (props.marginBottom = `${e.target.value}${marginbottomcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setmarginbottomcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.marginBottom = `${marginbottomcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">Margin Left</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={marginleftcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setmarginleftcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${marginleftcssvalue}${marginleftcssunits}`);
                  return (props.marginLeft = `${e.target.value}${marginleftcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setmarginleftcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.marginLeft = `${marginleftcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">Margin right</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={marginrightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setmarginrightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${marginrightcssvalue}${marginrightcssunits}`);
                  return (props.marginRight = `${e.target.value}${marginrightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setmarginrightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.marginRight = `${marginrightcssvalue}${event.target.value}`);
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
        <h2>Padding</h2>
        <FormControl>

          <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Padding Top</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={paddingtopcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setpaddingtopcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${paddingtopcssvalue}${paddingtopcssunits}`);
                    return (props.paddingTop = `${e.target.value}${paddingtopcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setpaddingtopcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.paddingTop = `${paddingtopcssvalue}${event.target.value}`);
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
            <label htmlFor="Top">Padding Bottom</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                value={paddingbottomcssvalue}
                id="quantity"
                name="quantity"
                min="0"
                max="50"
                onChange={(e) => {
                  setpaddingbottomcssvalue(e.target.value);
                  setProp((props) => {
                    console.log(`${paddingbottomcssvalue}${paddingbottomcssunits}`);
                    return (props.paddingBottom = `${e.target.value}${paddingbottomcssunits}`);
                  });
                }}
              ></input>

              <select
                name="Top"
                id="Top"
                onChange={(event) => {
                  setpaddingbottomcssunits(`${event.target.value}`);
                  setProp((props) => {
                    return (props.paddingBottom = `${paddingbottomcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">Padding Left</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={paddingleftcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setpaddingleftcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${paddingleftcssvalue}${paddingleftcssunits}`);
                  return (props.paddingLeft = `${e.target.value}${paddingleftcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setpaddingleftcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.paddingLeft = `${paddingleftcssvalue}${event.target.value}`);
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
          <label htmlFor="Top">padding right</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              value={paddingrightcssvalue}
              id="quantity"
              name="quantity"
              min="0"
              max="50"
              onChange={(e) => {
                setpaddingrightcssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${paddingrightcssvalue}${paddingrightcssunits}`);
                  return (props.paddingRight = `${e.target.value}${paddingrightcssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setpaddingrightcssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.paddingRight = `${paddingrightcssvalue}${event.target.value}`);
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
      
    </>
  )
}

export default Dimension
