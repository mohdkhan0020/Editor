import React,{useState,memo} from 'react'
import { FormControl } from '@mui/material';
import SelectTag from '../Input/SelectTag';
import InputTag from '../Input/InputTag';
import SelectTagUnits from '../Input/SelectTagUnits';

const Flex = ({setprop}) => {
    const [flexbasiscssvalue, setflexbasiscssvalue] = useState('');
    const [flexbasiscssunits, setflexbasiscssunits] = useState('');
  return (<>
  
        <FormControl>
        <h1>Flex</h1>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Flex</label>
            <div style={{ display: "flex" }}>
          <SelectTag id={"FlexContainer"}setprop={setprop}/>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Position">Flex Direction</label>
            <div style={{ display: "flex" }}>
            <SelectTag id={"FlexDirection"}setprop={setprop}/>
            </div>
          </FormControl>
        </div>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Justify Content</label>
            <div style={{ display: "flex" }}>
            <SelectTag id={"JustifyContent"}setprop={setprop}/>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Position">Align Items</label>
            <div style={{ display: "flex" }}>
            <SelectTag id={"AlignItems"}setprop={setprop}/>
            </div>
          </FormControl>
        </div>
       </FormControl>
       <FormControl>
       <div style={{ display: "flex" }}>
          <FormControl>
            <label htmlFor="Top"> Flex Grow</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="0"
                min="0"
                max="50"
                onChange={(e) => {
                  
                  setprop((props) => {
                    return (props.flexGrow = e.target.value);
                  });
                }}
              ></input>
            </div>
          </FormControl>

          <FormControl>
            <label htmlFor="Top">Flex Shrink </label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="0"
                min="0"
                max="50"
                onChange={(e) => {
                  
                  setprop((props) => {
                    return (props.flexShrink = e.target.value);
                  });
                }}
              ></input>

              
            </div>


          </FormControl>
        </div>
       </FormControl>

       <FormControl>
       <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Align Self</label>
            <div style={{ display: "flex" }}>
            <SelectTag id={"AlignSelf"}setprop={setprop}/>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Flex Basis</label>
            <div style={{ display: "flex" }}>
            <InputTag
              id={"FlexBasis"}
              value={flexbasiscssvalue}
              setcssvalue={setflexbasiscssvalue}
              setcssunits={setflexbasiscssunits}
              setprop={setprop}
            />

            <SelectTagUnits
              id={"FlexBasis"}
              units={setflexbasiscssunits}
              setcssvalue={setflexbasiscssvalue}
              setProp={setprop}
              value={flexbasiscssvalue}
              defaultvalue={flexbasiscssunits}
            />
            </div>
          </FormControl>
        </div>
       </FormControl>
       </>
  )
}
export default memo(Flex)
