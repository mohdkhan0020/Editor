import React,{useState} from 'react'
import { FormControl } from '@mui/material';

const Flex = ({setProp}) => {
    const [flexbasiscssvalue, setflexbasiscssvalue] = useState(0);
    const [flexbasiscssunits, setflexbasiscssunits] = useState(`px`);
  return (<>
  
        <FormControl>
        <h1>Flex</h1>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Flex</label>
            <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              onChange={(event) => {
                setProp((props) => (props.display = event.target.value));
              }}
            >
              <option value="block">Disable</option>
              <option value="flex">Enable</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Position">Flex Direction</label>
            <div style={{ display: "flex" }}>
            <select
              name="Position"
              id="Position"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.flexDirection = event.target.value));
              }}
            >
              <option value="row">row</option>
              <option value="row-reverse">row-reverse</option>
              <option value="column">column</option>
              <option value="column-reverse">column-reverse</option>
            </select>
            </div>


          </FormControl>
        </div>
        <div style={{ display: "flex" }}>
          <FormControl>
          <label htmlFor="textalign">Justify Content</label>
            <div style={{ display: "flex" }}>
            <select
              name="textalign"
              id="textalign"
              onChange={(event) => {
                setProp((props) => (props.justifyContent = event.target.value));
              }}
            >
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
              <option value="center">center</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Position">Align Items</label>
            <div style={{ display: "flex" }}>
            <select
              name="Position"
              id="Position"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.alignItems = event.target.value));
              }}
            >
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="stretch">stretch</option>
              <option value="center">center</option>
            </select>
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
                  
                  setProp((props) => {
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
                  
                  setProp((props) => {
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
            <select
              name="Position"
              id="Position"
              onChange={(event) => {
                console.log(event.target.value);
                setProp((props) => (props.alignSelf = event.target.value));
              }}
            >
              <option value="auto">auto</option>
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="stretch">stretch</option>
              <option value="center">center</option>
            </select>
            </div>
          </FormControl>
          <FormControl>
          <label htmlFor="Top">Flex Basis</label>
            <div style={{ display: "flex" }}>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={flexbasiscssvalue}
              min="0"
              max="50"
              onChange={(e) => {
                setflexbasiscssvalue(e.target.value);
                setProp((props) => {
                  console.log(`${flexbasiscssvalue}${flexbasiscssunits}`);
                  return (props.flexBasis = `${e.target.value}${flexbasiscssunits}`);
                });
              }}
            ></input>

            <select
              name="Top"
              id="Top"
              onChange={(event) => {
                setflexbasiscssunits(`${event.target.value}`);
                setProp((props) => {
                  return (props.flexBasis = `${flexbasiscssvalue}${event.target.value}`);
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

export default Flex
