import React,{useState} from 'react'
import { FormControl } from '@mui/material';
import SelectTag from '../Input/SelectTag';
import InputTag from '../Input/InputTag';
import SelectTagUnits from '../Input/SelectTagUnits';

const Typography = ({setprop}) => {
    const [fontsizecssvalue, setfontsizecssvalue] = useState('');
    const [fontsizecssunits, setfontsizecssunits] = useState(`px`);
  
    const [letterSpacingcssvalue, setletterSpacingcssvalue] = useState('');
    const [letterSpacingcssunits, setletterSpacingcssunits] = useState(`px`);

    const [lineheightcssvalue, setlineheightcssvalue] = useState('');
    const [lineheightcssunits, setlineheightcssunits] = useState(`px`);
  return (
    <div>
        <h1>Typography</h1>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="FontFamily">Font Family</label>
            <div style={{ display: "flex" }}>
            <SelectTag id={"FontFamily"} setprop={setprop} />
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Font Size</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"FontSize"}
              value={fontsizecssvalue}
              setcssvalue={setfontsizecssvalue}
              setcssunits={setfontsizecssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"FontSize"}
              units={setfontsizecssunits}
              setcssvalue={setfontsizecssvalue}
              setProp={setprop}
              value={fontsizecssvalue}
              defaultvalue={fontsizecssunits}
            />
            </div>
          </FormControl>
        </div>
        <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Font Weight</label>
            <div style={{ display: "flex" }}>
            <SelectTag id={"FontWeight"} setprop={setprop} />
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Letter Spacing</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"LetterSpacing"}
              value={letterSpacingcssvalue}
              setcssvalue={setletterSpacingcssvalue}
              setcssunits={setletterSpacingcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"LetterSpacing"}
              units={setletterSpacingcssunits}
              setcssvalue={setletterSpacingcssvalue}
              setProp={setprop}
              value={letterSpacingcssvalue}
              defaultvalue={letterSpacingcssunits}
            />
            </div>
          </FormControl>
        </div>
        </FormControl>
        <FormControl>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Text Align</label>
            <div style={{ display: "flex" }}>
            <SelectTag id={"TextAlign"} setprop={setprop} />
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Line Height</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"LineHeight"}
              value={lineheightcssvalue}
              setcssvalue={setlineheightcssvalue}
              setcssunits={setlineheightcssunits}
              setprop={setprop}
            />
            <SelectTagUnits
              id={"LineHeight"}
              units={setlineheightcssunits}
              setcssvalue={setlineheightcssvalue}
              setProp={setprop}
              value={lineheightcssvalue}
              defaultvalue={lineheightcssunits}
            />
            </div>
          </FormControl>
        </div>
        </FormControl>
    </div>
  )
}
export default Typography
