import React from "react";
import { useState } from "react";
import { useNode } from "@craftjs/core";

import {
  Button as MaterialButton,
  Grid,
  FormControl,
  MenuItem,
  Select,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

export const Button = ({ size, variant, color, children, text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
    >
      {text}
    </MaterialButton>
  );
};

const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [string, setString] = useState("");

  function search(event) {
    // debugger;
    if (event.key === "Enter") {
      const inputValueWhenUserEnter = event.target.value;
      let str = "",
        num = "";

      inputValueWhenUserEnter.split("").filter((item) => {
        // debugger;
        if (isNaN(item)) {
          str = str + item;
          let units = ["px", "%", "vh", "em", "rem", "vw"];
          if (units.includes(str)) setString(str);
        } else {
          num = num + item;
          setNumber(num);
        }
        return item;
      });
    }
  }
  const handleChange = (event) => {
    setString(event.target.value);
  };
  const handleChanges = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div className="">
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Size</FormLabel>

        <Select
          defaultValue={props.size}
          onChange={(e) => setProp((props) => (props.size = e.target.value))}
        >
          <MenuItem
            label="Small"
            value="small"
            control={<Radio size="small" color="primary" />}
          >
            Small
          </MenuItem>
          <MenuItem
            label="Medium"
            value="medium"
            control={<Radio size="small" color="primary" />}
          >
            Medium
          </MenuItem>
          <MenuItem
            label="Large"
            value="large"
            control={<Radio size="small" color="primary" />}
          >
            Large
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Variant</FormLabel>

        <Select
          defaultValue={props.variant}
          onChange={(e) => setProp((props) => (props.variant = e.target.value))}
        >
          <MenuItem
            label="Text"
            value="text"
            control={<Radio size="small" color="primary" />}
          >
            Text
          </MenuItem>
          <MenuItem
            label="Outlined"
            value="outlined"
            control={<Radio size="small" color="primary" />}
          >
            Outlined
          </MenuItem>
          <MenuItem
            label="Contained"
            value="contained"
            control={<Radio size="small" color="primary" />}
          >
            Contained
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Color</FormLabel>

        <Select
          defaultValue={props.color}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
        >
          <MenuItem
            label="Default"
            value="success"
            control={<Radio size="small" color="default" />}
          >
            Success
          </MenuItem>
          <MenuItem
            label="Primary"
            value="primary"
            control={<Radio size="small" color="primary" />}
          >
            Primary
          </MenuItem>
          <MenuItem
            label="Seconday"
            value="secondary"
            control={<Radio size="small" color="primary" />}
          >
            Seconday
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel>Text</FormLabel>

        <input
          type="text"
          value={username}
          placeholder="jdoe123"
          onChange={(e) => {
            setProp((props) => (props.text = e.target.value));
            setUsername(e.target.value);
          }}
        />
      </FormControl>
      <br />
      <br />
      <input
        id="demo11"
        type="text"
        value={number}
        placeholder="some text"
        className="search"
        onKeyUp={search}
        onChange={handleChanges}
      />
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo11"
        value={string}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="px">px</MenuItem>
        <MenuItem value="%">%</MenuItem>
        <MenuItem value="vh">vh</MenuItem>
        <MenuItem value="em">em</MenuItem>
        <MenuItem value="rem">rem</MenuItem>
        <MenuItem value="vw">vw</MenuItem>
      </Select>
    </div>
  );
};

Button.craft = {
  props: {
    size: "small",
    variant: "contained",
    color: "primary",
    text: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
};
