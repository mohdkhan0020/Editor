import React,{useState} from 'react'
import {FormControl } from "@mui/material";
import SelectTag from '../Input/SelectTag';
import InputTag from '../Input/InputTag';
import SelectTagUnits from '../Input/SelectTagUnits';

const Dimension = ({setprop}) => {
    const [widthcssvalue, setwidthcssvalue] = useState('');
    const [widthcssunits, setwidthcssunits] = useState(`px`);
  
    const [maxwidthcssvalue, setmaxwidthcssvalue] = useState('');
    const [maxwidthcssunits, setmaxwidthcssunits] = useState(`px`);
  
    const [heightcssvalue, setheightcssvalue] = useState('');
    const [heightcssunits, setheightcssunits] = useState(`px`);
  
    const [minheightcssvalue, setminheightcssvalue] = useState('');
    const [minheightcssunits, setminheightcssunits] = useState(`px`);
  
    const [margintopcssvalue, setmargintopcssvalue] = useState('');
    const [margintopcssunits, setmargintopcssunits] = useState(`px`);
  
    const [marginbottomcssvalue, setmarginbottomcssvalue] = useState('');
    const [marginbottomcssunits, setmarginbottomcssunits] = useState(`px`);
  
    const [marginleftcssvalue, setmarginleftcssvalue] = useState('');
    const [marginleftcssunits, setmarginleftcssunits] = useState(`px`);
  
    const [marginrightcssvalue, setmarginrightcssvalue] = useState('');
    const [marginrightcssunits, setmarginrightcssunits] = useState(`px`);
  
    const [paddingtopcssvalue, setpaddingtopcssvalue] = useState('');
    const [paddingtopcssunits, setpaddingtopcssunits] = useState(`px`);
  
    const [paddingbottomcssvalue, setpaddingbottomcssvalue] = useState('');
    const [paddingbottomcssunits, setpaddingbottomcssunits] = useState(`px`);
  
    const [paddingleftcssvalue, setpaddingleftcssvalue] = useState('');
    const [paddingleftcssunits, setpaddingleftcssunits] = useState(`px`);
  
    const [paddingrightcssvalue, setpaddingrightcssvalue] = useState('');
    const [paddingrightcssunits, setpaddingrightcssunits] = useState(`px`);
  return (
    <>
        <h1>Dimension</h1>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Width">Width</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"Width"}
              value={widthcssvalue}
              setcssvalue={setwidthcssvalue}
              setcssunits={setwidthcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"Width"}
              units={setwidthcssunits}
              setcssvalue={setwidthcssvalue}
              setProp={setprop}
              value={widthcssvalue}
              defaultvalue={widthcssunits}
            />
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">height</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"Height"}
              value={heightcssvalue}
              setcssvalue={setheightcssvalue}
              setcssunits={setheightcssunits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"Height"}
              units={setheightcssunits}
              setcssvalue={setheightcssvalue}
              setProp={setprop}
              value={heightcssvalue}
              defaultvalue={heightcssunits}
            />
            </div>
          </FormControl>
        </div>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Width">Max Width</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"MaxWidth"}
              value={maxwidthcssvalue}
              setcssvalue={setmaxwidthcssvalue}
              setcssunits={setmaxwidthcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"MaxWidth"}
              units={setmaxwidthcssunits}
              setcssvalue={setmaxwidthcssvalue}
              setProp={setprop}
              value={maxwidthcssvalue}
              defaultvalue={maxwidthcssunits}
            />
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Min Height</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"MinHeight"}
              value={minheightcssvalue}
              setcssvalue={setminheightcssvalue}
              setcssunits={setminheightcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"MinHeight"}
              units={setminheightcssunits}
              setcssvalue={setminheightcssvalue}
              setProp={setprop}
              value={minheightcssvalue}
              defaultvalue={minheightcssunits}
            />
            </div>
          </FormControl>
        </div>
        <h2>Margin</h2>
        <FormControl>
          <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top">Margin Top</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"MarginTop"}
              value={margintopcssvalue}
              setcssvalue={setmargintopcssvalue}
              setcssunits={setmargintopcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"MarginTop"}
              units={setmargintopcssunits}
              setcssvalue={setmargintopcssvalue}
              setProp={setprop}
              value={margintopcssvalue}
              defaultvalue={margintopcssunits}
            />
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Margin Bottom</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"MarginBottom"}
              value={marginbottomcssvalue}
              setcssvalue={setmarginbottomcssvalue}
              setcssunits={setmarginbottomcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"MarginBottom"}
              units={setmarginbottomcssunits}
              setcssvalue={setmarginbottomcssvalue}
              setProp={setprop}
              value={marginbottomcssvalue}
              defaultvalue={marginbottomcssunits}
            />
            </div>


          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Top">Margin Left</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"MarginLeft"}
              value={marginleftcssvalue}
              setcssvalue={setmarginleftcssvalue}
              setcssunits={setmarginleftcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"MarginLeft"}
              units={setmarginleftcssunits}
              setcssvalue={setmarginleftcssvalue}
              setProp={setprop}
              value={marginleftcssvalue}
              defaultvalue={marginleftcssunits}
            />
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Margin right</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"MarginRight"}
              value={marginrightcssvalue}
              setcssvalue={setmarginrightcssvalue}
              setcssunits={setmarginrightcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"MarginRight"}
              units={setmarginrightcssunits}
              setcssvalue={setmarginrightcssvalue}
              setProp={setprop}
              value={marginrightcssvalue}
              defaultvalue={marginrightcssunits}
            />
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
            <InputTag
              id={"PaddingTop"}
              value={paddingtopcssvalue}
              setcssvalue={setpaddingtopcssvalue}
              setcssunits={setpaddingtopcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"PaddingTop"}
              units={setpaddingtopcssunits}
              setcssvalue={setpaddingtopcssvalue}
              setProp={setprop}
              value={paddingtopcssvalue}
              defaultvalue={paddingtopcssunits}
            />
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Padding Bottom</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"PaddingBottom"}
              value={paddingbottomcssvalue}
              setcssvalue={setpaddingbottomcssvalue}
              setcssunits={setpaddingbottomcssunits}
              setprop={setprop}
            />
           <SelectTagUnits
              id={"PaddingBottom"}
              units={setpaddingbottomcssunits}
              setcssvalue={setpaddingbottomcssvalue}
              setProp={setprop}
              value={paddingbottomcssvalue}
              defaultvalue={paddingbottomcssunits}
            />
            </div>
          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="Top">Padding Left</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"PaddingLeft"}
              value={paddingleftcssvalue}
              setcssvalue={setpaddingleftcssvalue}
              setcssunits={setpaddingleftcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"PaddingLeft"}
              units={setpaddingleftcssunits}
              setcssvalue={setpaddingleftcssvalue}
              setProp={setprop}
              value={paddingleftcssvalue}
              defaultvalue={paddingleftcssunits}
            />
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">padding right</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"PaddingLeft"}
              value={paddingrightcssvalue}
              setcssvalue={setpaddingrightcssvalue}
              setcssunits={setpaddingrightcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"PaddingRight"}
              units={setpaddingrightcssunits}
              setcssvalue={setpaddingrightcssvalue}
              setProp={setprop}
              value={paddingrightcssvalue}
              defaultvalue={paddingrightcssunits}
            />
            </div>
          </FormControl>
        </div>
        </FormControl>
    </>
  )
}

export default Dimension
